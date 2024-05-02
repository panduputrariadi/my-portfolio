import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Link className="flex justify-center items-center w-16 h-16 rounded-full font-blod text center text-light bg-dark" href={'/'}>
        Pan
      </Link>
    </div>
  )
};
