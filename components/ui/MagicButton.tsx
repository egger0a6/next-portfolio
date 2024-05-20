import {motion} from "framer-motion";

const MagicButton = ({
  title, icon, handleClick, otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const buttonVariants = {
    render: {
      opacity: 1,
      transition: {duration: 2, delay: 3}
    },
    hover: {
      y: -2,
      scale: 1.1,
      transition: {duration: 0.3, type: "spring", stiffness: 400, damping: 10}
    },
  }

  return (
    <motion.button
      initial={{opacity: 0}}
      animate={"render"}
      whileHover={"hover"}
      variants={buttonVariants}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1B2027_0%,#FF204E_50%,#1B2027_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-dark-1 px-7 text-lg font-semibold backdrop-blur-3xl gap-3 ${otherClasses}`}>
        {title}
        {icon}
      </span>
    </motion.button>
  )
}

export default MagicButton;