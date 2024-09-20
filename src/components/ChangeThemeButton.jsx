import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { ChromePicker } from "react-color";
import { useTheme } from "@/context/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const ChangeThemeButton = () => {
  const { theme, adjustTheme } = useTheme();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="change-theme-button p-0" name="">
          <img
            src="https://images.lumacdn.com/themes/thumb/minimal.jpg"
            alt="Minimal Theme"
            className="w-12"
          />
          <div className="button-text-wrap">
            <div className="theme-text">Theme</div>
            <div className="theme-type">Minimal</div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-4 h-4 edit-theme-icon"
            >
              <path
                className=""
                fillRule="evenodd"
                d="M10.217 3.22c.354-.354.456-.451.543-.51.42-.28.969-.28 1.389 0 .087.059.189.156.543.51s.45.456.509.543c.28.42.28.968 0 1.389-.058.086-.155.189-.509.543l-.53.53L9.687 3.75zm-1.59 1.59L11.1 7.287l-5.76 5.76a1.25 1.25 0 0 1-.963.363l-.49-.031c-.48-.03-.768-.05-.977-.09-.185-.036-.213-.072-.214-.074-.001 0-.037-.028-.073-.213-.04-.209-.06-.498-.09-.978l-.031-.489a1.25 1.25 0 0 1 .363-.963zm1.3-3.347c-.227.152-.441.366-.719.644l-.052.052-1.06 1.06-6.29 6.291a2.75 2.75 0 0 0-.8 2.12l.03.489.003.042c.027.424.052.81.113 1.124.066.345.191.697.485.99.293.293.645.419.99.485.314.06.7.085 1.124.112l.042.003.489.031a2.75 2.75 0 0 0 2.12-.8l6.29-6.29 1.06-1.06.052-.053c.278-.277.493-.491.644-.718a2.75 2.75 0 0 0 0-3.056c-.151-.226-.366-.44-.644-.718l-.051-.052-.052-.052c-.278-.278-.492-.492-.719-.644a2.75 2.75 0 0 0-3.055 0m.578 11.986a.75.75 0 1 0 0 1.5h4a.75.75 0 1 0 0-1.5z"
              ></path>
            </svg>
          </div>
        </button>
      </DrawerTrigger>

      <DrawerContent className="bg-white/[0.48] backdrop-blur-lg border-1 border-black/[0.04] shadow-drawer rounded-t-2xl focus-visible:outline-0">
        <div className="theme-controls flex flex-wrap items-center justify-center gap-2 py-4 px-5">
          <div className="custom-dropdown max-w-[280px] w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group !p-0 !mt-0 !w-full !bg-transparent !hover:opacity-50">
                  <div
                    className="menu-trigger-wrapper max-w-[280px] cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0"
                  >
                    <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                      <div className="content-wrapper gap-1 flex item-center">
                        <div className="color-wrap mr-1">
                          <div className="circle w-6 h-6 rounded-full"></div>
                        </div>
                        <div className="content-wrap max-w-[280px] flex-1 flex items-center justify-between">
                          <div className="max-w-[280px] text-base text-lightBlack/[0.64]">
                            Color
                          </div>
                          <div className="whitespace-nowrap capitalize text-base font-medium text-black/[0.36] pr-2">
                            Red
                          </div>
                        </div>
                        <div className="arrow-wrap flex items-center justify-center transition-all text-black/[0.2] w-4">
                          <svg
                            className="!fill-lightBlack/[0.32] !stroke-transparent"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.164 10.253a1 1 0 1 0-1.328 1.494l4.5 4a1 1 0 0 0 1.328 0l4.5-4a1 1 0 0 0-1.328-1.494L8 13.662zm7.672-4.506a1 1 0 0 0 1.328-1.494l-4.5-4a1 1 0 0 0-1.328 0l-4.5 4a1 1 0 1 0 1.328 1.494L8 2.338z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <ChromePicker color={theme} onChange={adjustTheme} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="custom-dropdown max-w-[280px] w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group !p-0 !mt-0 !w-full !bg-transparent !hover:opacity-50">
                  <div
                    className="menu-trigger-wrapper max-w-[280px] cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0"
                  >
                    <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                      <div className="content-wrapper gap-1 flex item-center">
                        <div className="color-wrap mr-1">
                          <div className="circle w-6 h-6 rounded-full"></div>
                        </div>
                        <div className="content-wrap max-w-[280px] flex-1 flex items-center justify-between">
                          <div className="max-w-[280px] text-base text-lightBlack/[0.64]">
                            Color
                          </div>
                          <div className="whitespace-nowrap capitalize text-base font-medium text-black/[0.36] pr-2">
                            Red
                          </div>
                        </div>
                        <div className="arrow-wrap flex items-center justify-center transition-all text-black/[0.2] w-4">
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M4.164 10.253a1 1 0 1 0-1.328 1.494l4.5 4a1 1 0 0 0 1.328 0l4.5-4a1 1 0 0 0-1.328-1.494L8 13.662zm7.672-4.506a1 1 0 0 0 1.328-1.494l-4.5-4a1 1 0 0 0-1.328 0l-4.5 4a1 1 0 1 0 1.328 1.494L8 2.338z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  {/* <ChromePicker color={theme} onChange={adjustTheme} /> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="custom-dropdown max-w-[280px] w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group !p-0 !mt-0 !w-full !bg-transparent !hover:opacity-50">
                  <div
                    className="menu-trigger-wrapper max-w-[280px] cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0"
                  >
                    <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                      <div className="content-wrapper gap-1 flex item-center">
                        <div className="color-wrap mr-1">
                          <div className="w-6 h-6 rounded-full text-base ">Ag</div>
                        </div>
                        <div className="content-wrap max-w-[280px] flex-1 flex items-center justify-between">
                          <div className="max-w-[280px] text-base text-lightBlack/[0.64]">
                            Font
                          </div>
                          <div className="whitespace-nowrap capitalize text-base font-medium text-black/[0.36] pr-2">
                            Default
                          </div>
                        </div>
                        <div className="arrow-wrap flex items-center justify-center transition-all text-black/[0.2] w-4">
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M4.164 10.253a1 1 0 1 0-1.328 1.494l4.5 4a1 1 0 0 0 1.328 0l4.5-4a1 1 0 0 0-1.328-1.494L8 13.662zm7.672-4.506a1 1 0 0 0 1.328-1.494l-4.5-4a1 1 0 0 0-1.328 0l-4.5 4a1 1 0 1 0 1.328 1.494L8 2.338z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  {/* <ChromePicker color={theme} onChange={adjustTheme} /> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="custom-dropdown max-w-[280px] w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group !p-0 !mt-0 !w-full !bg-transparent !hover:opacity-50">
                  <div
                    className="menu-trigger-wrapper max-w-[280px] cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0"
                  >
                    <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                      <div className="content-wrapper gap-1 flex item-center">
                        <div className="color-wrap mr-1">
                          <div className="circle w-6 h-6 rounded-full"></div>
                        </div>
                        <div className="content-wrap max-w-[280px] flex-1 flex items-center justify-between">
                          <div className="max-w-[280px] text-base text-lightBlack/[0.64]">
                            Color
                          </div>
                          <div className="whitespace-nowrap capitalize text-base font-medium text-black/[0.36] pr-2">
                            Red
                          </div>
                        </div>
                        <div className="arrow-wrap flex items-center justify-center transition-all text-black/[0.2] w-4">
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M4.164 10.253a1 1 0 1 0-1.328 1.494l4.5 4a1 1 0 0 0 1.328 0l4.5-4a1 1 0 0 0-1.328-1.494L8 13.662zm7.672-4.506a1 1 0 0 0 1.328-1.494l-4.5-4a1 1 0 0 0-1.328 0l-4.5 4a1 1 0 1 0 1.328 1.494L8 2.338z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  {/* <ChromePicker color={theme} onChange={adjustTheme} /> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ChangeThemeButton;
