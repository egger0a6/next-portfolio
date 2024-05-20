"use client";

import { useEffect, useState } from "react";
import Section from "./design/Section";
import ContactForm from "./ContactForm";
import ShimmerButton from "./ui/ShimmerButton";
import { MdContentCopy } from "react-icons/md";

const Contact = () => {
  const [footerHeight, setFooterHeight] = useState<number>();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "zacheggert37@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 6000);
  }

  // useEffect(() => {
  //   let footerHeight = document.getElementById("footer")?.getBoundingClientRect().height;
  //   setFooterHeight(footerHeight);
  // }, []);

  return (
    <Section
      id="contact"
      crosses
    >
      <div className="container sm:h-screen p-16 lg:p-0">
        <div className="flex flex-col min-w-[50%] max-w-[56rem] mx-auto flex-1">
          <h1 className="h1 text-center">Get in Touch</h1>
          <p className="text-center text-lg mt-4">Have a project idea or in need of a dev? I&apos;m just a couple clicks away.</p>
          {/* <h1 className="h1 text-center">Contact</h1>
          <p className="text-center text-2xl">Let's Connect</p> */}
          <ContactForm />

          <div className="flex flex-col mt-36 gap-2 w-48 justify-center items-center mx-auto">
            <p className="text-center text-sm text-light-4 font-semibold">Only need my email?</p>
            <ShimmerButton
              title={copied ? "Email copied!" : "Copy my email"}
              icon={copied ? "" : <MdContentCopy />}
              handleClick={handleCopy}
              otherClasses="py-4 font-semibold w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact;