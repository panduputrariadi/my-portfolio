import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TextHero = () => {
  return (
    <div className="w-1/2 flex flex-col items-center self-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block w-full text-dark text-6xl font-bold capitalize"
      >
        Turning Vision Into Reality With Code And Design.
      </motion.h1>
      <p className="my-4 text-base font-medium text-justify">
        As a skilled full-stack developer, I am dedicated to turning ideas into
        innovative web applications. Explore my latest projects and articles,
        showcasing my expertise in React.js and web development.
      </p>
      <div className="flex items-center self-start mt-2">
        <Link
          href="/CV PANDU PUTRA.pdf"
          target="_blank"
          className="flext items-center bg-dark text-white p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
          download={true}
        >
          Get My CV
        </Link>
      </div>
    </div>
  );
};

export default TextHero;
