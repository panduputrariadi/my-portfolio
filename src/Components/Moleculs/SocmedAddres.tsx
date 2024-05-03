"use client";
import navLogo from "@/constants/navLogo";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

export const SocmedAddres = () => {
  return (
    <nav>
      {navLogo.map(({ href, label, logo }) => (
        <motion.a
          key={href}
          href={href}
          className="inline-block"
          target="_blank"
          whileHover={{y:-2}}
        >
          <Image
            alt={label}
            src={logo}
            width={24}
            height={24}
            className="mx-3"
          />
        </motion.a>
      ))}
    </nav>
  );
};
