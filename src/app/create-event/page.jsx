"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Left from "@/components/Left";
import Right from "@/components/Right";
import { useTheme } from "@/context/ThemeContext";
import { HexColorPicker } from "react-colorful";

const page = () => {

  return (
    <div>
      {/* <HexColorPicker color={theme} onChange={adjustTheme} /> */}
      {/* <div className="h-screen w-full bg-moving-radial bg-[length:200%_200%] animate-moving-bg top-0 bottom-0 left-0 right-0 h-full fixed -z-10"></div> */}
      <Header />
      <div className="container">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default page;
