const ShimmerButton = ({
  title, icon, handleClick, otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // Button code
    <button
      onClick={handleClick}
      className={`inline-flex relative animate-shimmer items-center justify-center rounded-md border border-dark-4 bg-[linear-gradient(110deg,#1B2027,45%,#f34949,55%,#1B2027)] bg-[length:200%_100%] px-6 transition-colors focus:outline-none gap-2 ${otherClasses}`}
    >
      {title}
      {icon}
    </button>
  )
}

export default ShimmerButton;