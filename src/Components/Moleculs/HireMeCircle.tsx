import Image from "next/image";
import Link from "next/link";
import React from "react";

const HireMeCircle = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-autoflex items-center justify-items-center relative">
        <Image
          alt=""
          src={"/images/circular-text.png"}
          width={530}
          height={530}
          className="animate-spin-slow"
        />
        <Link
          href={'https://linkedin.com/in/pandu-putra-91907a267'}
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light shadow-md bg-dark border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMeCircle;
