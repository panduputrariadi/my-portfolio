"use client";
import React from "react";
import { Logo } from "../Moleculs/Logo";
import WesbiteAddres from "../Moleculs/WesbiteAddres";
import { SocmedAddres } from "../Moleculs/SocmedAddres";

const Header = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <WesbiteAddres />
      <SocmedAddres />
      <Logo />
    </header>
  );
};

export default Header;
