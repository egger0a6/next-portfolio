import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion, useAnimate } from "framer-motion";
import ShimmerButton from "./ui/ShimmerButton";
import Loader from "./design/Loader";
import { MdContentCopy } from "react-icons/md";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
  } = useForm({
    mode: "onTouched",
  });
  const [isClient, setIsClient] = useState(false);
  const [scope, animate] = useAnimate();
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const hCaptchaRef = useRef<HCaptcha>(null);

  const apiKey = process.env.NEXT_PUBLIC_WEB3_API_ACCESS_KEY!;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token, { shouldValidate: true });
  };

  const handleClick = () => {
    animate(
      scope.current,
      {scale: [0.9, 1]},
      {duration: 0.6, type: "spring"}
    );
  }

  const handleCopy = () => {
    const email = "zacheggert37@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 6000);
  }

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Portfolio Contact",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
      hCaptchaRef.current?.resetCaptcha();
      setTimeout(() => {
        setMessage("");
      }, 6000);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  if (!isClient) return <Loader />;

  return (
    <div className="flex flex-col w-full mt-14">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          type="checkbox"
          id=""
          className="hidden"
          {...register("botcheck")}
        />

        <div>
          <label htmlFor="full_name" className="sr-only">
            Full Name
          </label>
          <input
            id="full_name"
            type="text"
            placeholder="Full Name"
            autoComplete="false"
            className={`contact-input ${errors.name
                ? "border-red-2 ring-red-1"
                : "border-transparent focus:border-light-1 ring-light-6"
              }`}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          <div className={`mt-1 text-red-2 opacity-0 ${errors.name ? "opacity-100" : "opacity-0 cursor-default"}`}>
            <small>{errors.name ? errors.name.message : "."}</small>
          </div>
        </div>

        <div>
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            autoComplete="false"
            className={`contact-input ${errors.email
                ? "border-red-2 ring-red-1"
                : "border-transparent focus:border-light-1 ring-light-6"
              }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          <div className={`mt-1 text-red-2 opacity-0 ${errors.email ? "opacity-100" : "opacity-0 cursor-default"}`}>
            <small>{errors.email ? errors.email.message : "."}</small>
          </div>
        </div>

        <div>
          <textarea
            placeholder="Let me know how I can help!"
            className={`contact-input h-36 ${errors.message
                ? "border-red-2 ring-red-1"
                : "border-transparent focus:border-light-1 ring-light-6"
              }`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          <div className={`mt-1 text-red-2 opacity-0 ${errors.message ? "opacity-100" : "opacity-0 cursor-default"}`}>
            <small>{errors.message ? errors.message.message : "."}</small>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-7">

          <div className={`transition-transform duration-300 ease-out ${isValid ? "scale-100" : "scale-0"}`}>
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onHCaptchaChange}
              ref={hCaptchaRef}
              theme="dark"
            />
            <div className="absolute top-0 left-0 w-full h-full border-4 border-dark-4 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full ring-2 ring-dark-4 rounded-md pointer-events-none"></div>
          </div>

          <motion.button
            ref={scope}
            type="submit"
            onClick={handleClick}
            className="group/btn relative w-full px-7 py-4 font-semibold transition-colors bg-dark-4 rounded-md hover:bg-dark-6 ">
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Send Message"
            )}
            <BottomGradient />
          </motion.button>
        </div>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-400">
          {message}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-2">
          {message || "Something went wrong. Please try later."}
        </div>
      )}

      <div className="relative flex flex-col mt-36 gap-2 w-56 justify-center items-center mx-auto">
        <p className="text-center text-sm text-light-4 font-semibold">Only need my email?</p>
        <ShimmerButton 
          title={copied ? "Email copied!" : "Copy my email"}
          icon={copied ? "" : <MdContentCopy />}
          handleClick={handleCopy}
          otherClasses="py-4 font-semibold w-full"
        />
      </div>
    </div>
  );
}

export default ContactForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-1 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-red-2 to-transparent" />
    </>
  );
};