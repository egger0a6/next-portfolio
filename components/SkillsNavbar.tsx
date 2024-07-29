"use client";

import Image from "next/image";

const SkillsNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-stroke-1">
      <div className="flex px-5 lg:px-7.5 xl:px-10 py-4">
        <a href="/" className="block xl:mr-8">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={55}
            height={55}
          />
        </a>
      </div>
    </div>
  )
}

export default SkillsNavbar;