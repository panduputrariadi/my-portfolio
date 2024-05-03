"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export const Logo = () => {
  return (
    <div className="absolute left-[50%] top-2 translate-x-[-50%]">
      <div className="flex justify-center items-center">
        <MotionLink
          className="flex justify-center items-center w-16 h-16 rounded-full font-blod text center text-light bg-dark"
          href={"/"}
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          Pan
        </MotionLink>
      </div>
    </div>
  );
};
