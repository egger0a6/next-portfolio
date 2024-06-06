import { curve1 } from "@/public";
import Image from "next/image";

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-[108%] right-[42%] w-[850px] -mt-1 mr-10 pointer-events-none xl:block transform ">
      <Image 
        src={curve1}
        width={850}
        height={182}
        alt="curve 1"
      />
    </div>
  );
};