import { curve2 } from "@/public";
import Image from "next/image";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[61px] -mt-1 ml-10 pointer-events-none 2xl:block">
      <Image 
        src={curve2}
        width={64}
        height={76}
        alt="curve 2"
      />
    </div>
  );
};