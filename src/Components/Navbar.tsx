import navLinks from "@/constants/navLink";
import navLogo from "@/constants/navLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="inline-block mx-3">
            {link.label}
          </Link>
        ))}
      </nav>
      <Logo />
      <nav>
        {navLogo.map(({ href, label, logo }) => (
          <a key={href} href={href} className="inline-block">
            {/* <Image src={logo} alt={label} className="w-6 h-6" /> */}
            <Image
              alt={label}
              src={logo}
              width={24}
              height={24}
              className="mx-3"
            />
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
