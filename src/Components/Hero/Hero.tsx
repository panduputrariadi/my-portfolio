import React, { ReactNode } from "react";
import ImageHero from "../Moleculs/ImageHero";
import TextHero from "../Moleculs/TextHero";

export const Hero = ({ className = "" }) => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className={`w-full h-full inline-block z-0 bg-light p-32 pt-0 ${className}`}>
        <div className="flex items-center justify-between w-full">
          <ImageHero />
          <TextHero />
        </div>
      </div>
    </main>
  );
};
