import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChromePicker } from "react-color";
import { useTheme } from "@/context/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import FontBlock from "./FontBlock";

const ChangeThemeButton = () => {
  const drawerRef = useRef(null);
  const { theme, adjustTheme, setCanBodyScroll } = useTheme();
  const [selected, setSelected] = useState("default");
  const [open, setOpen] = useState(false);
  const fontFamily = [
    { id: 1, font: "system-ui", label: "default", type: "mono" },
    { id: 2, font: "'VT323', monospace", label: "VT323", type: "vt" },
    {
      id: 3,
      font: "'Noto Sans Mono', monospace",
      label: "Noto Sans",
      type: "noto",
    },
    {
      id: 4,
      font: "'Space Mono', monospace",
      label: "Space Mono",
      type: "space",
    },
    {
      id: 5,
      font: "'Rubik Mono One', monospace",
      label: "Rubik One",
      type: "rubik",
    },
    {
      id: 6,
      font: "'Roboto Mono', monospace",
      label: "Roboto Mono",
      type: "roboto",
    },
    {
      id: 7,
      font: "'Ubuntu Sans Mono', system-ui",
      label: "Ubuntu Sans",
      type: "ubuntu",
    },
    { id: 8, font: "'Syne Mono', monospace", label: "Syne Mono", type: "syne" },
    {
      id: 9,
      font: "'Anonymous Pro', monospace",
      label: "Anonymous Pro",
      type: "pro",
    },
  ];

  const toggleDrawer = () => {
    setOpen(true);
    setCanBodyScroll(false);
  };

  const handleClickOutsideDrawer = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setOpen(false);
      setCanBodyScroll(true);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDrawer);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDrawer);
    };
  }, []);
  
  return (
    <>
     <div className="custom-drawer-overlay"></div>
      <div ref={drawerRef}>
        <button className="change-theme-button p-0" onClick={toggleDrawer}>
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
          <div className={`custom-drawer ${open ? "open" : ""}`}>
            <div className="flex flex-wrap items-center justify-center py-4 px-5 w-full">
              <div className="custom-dropdown w-full xxs:w-1/2 max-w-full md:w-1/4 py-2 px-2 xl:max-w-[280px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={null}
                      size={null}
                      className="group !p-0 !mt-0 !w-full !bg-lightBlack/[0.04] hover:!bg-lightBlack/[0.08]"
                    >
                      <div className="menu-trigger-wrapper max-w-full cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0">
                        <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                          <div className="content-wrapper gap-1 flex item-center">
                            <div className="color-wrap mr-1">
                              <div className="circle w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="content-wrap max-w-full flex-1 flex items-center justify-between">
                              <div className="max-w-full text-base text-lightBlack/[0.64]">
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
                  <DropdownMenuContent
                    align="center"
                    className="pb-3 after:bottom-2 after:left-0 after:right-0 after:w-[10px] after:mx-auto after:absolute after:bottom-0 after:inline-block after:content-[''] after:border-r-4 after:border-l-4 after:border-r-transparent after:border-l-transparent after:border-t-4 after:border-t-white"
                  >
                    <div className="wrap max-w-[95vw] bg-white rounded-lg backdrop-blur-lg shadow-fonts">
                      <ChromePicker color={theme} onChange={adjustTheme} />
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="custom-dropdown w-full xxs:w-1/2 max-w-full md:w-1/4 py-2 px-2 xl:max-w-[280px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={null}
                      size={null}
                      className="group !p-0 !mt-0 !w-full !bg-lightBlack/[0.04]"
                    >
                      <div className="menu-trigger-wrapper max-w-full cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0">
                        <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                          <div className="content-wrapper gap-1 flex item-center opacity-30">
                            <div className="color-wrap mr-1">
                              <div className="circle w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="content-wrap max-w-full flex-1 flex items-center justify-between">
                              <div className="max-w-full text-base text-lightBlack/[0.64]">
                                Style
                              </div>
                              <div className="whitespace-nowrap capitalize text-base font-medium text-black/[0.36] pr-2">
                                ---
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
                  <DropdownMenuContent align="end"></DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="custom-dropdown w-full xxs:w-1/2 max-w-full md:w-1/4 py-2 px-2 xl:max-w-[280px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={null}
                      size={null}
                      className="group !p-0 !mt-0 !w-full !bg-lightBlack/[0.04] hover:!bg-lightBlack/[0.08]"
                    >
                      <div className="menu-trigger-wrapper max-w-full cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0">
                        <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                          <div className="content-wrapper gap-1 flex item-center">
                            <div className="color-wrap mr-1">
                              <div
                                className={`w-6 h-6 rounded-full text-base text-lightBlack font-mono`}
                              >
                                Ag
                              </div>
                            </div>
                            <div className="content-wrap max-w-full flex-1 flex items-center justify-between">
                              <div className="max-w-full text-base text-lightBlack/[0.64]">
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
                  <DropdownMenuContent
                    align="center"
                    className="pb-3 after:bottom-2 after:left-0 after:right-0 after:w-[10px] after:mx-auto after:absolute after:bottom-0 after:inline-block after:content-[''] after:border-r-4 after:border-l-4 after:border-r-transparent after:border-l-transparent after:border-t-4 after:border-t-white"
                  >
                    <div className="wrap w-[360px] max-w-[95vw] p-4 bg-white rounded-lg backdrop-blur-lg shadow-fonts grid grid-cols-4 gap-3">
                      {fontFamily?.length > 0 &&
                        fontFamily?.map((family) => {
                          return (
                            <FontBlock
                              key={family?.id}
                              data={family}
                              setSelected={setSelected}
                              selected={selected}
                            />
                          );
                        })}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="custom-dropdown w-full xxs:w-1/2 max-w-full md:w-1/4 py-2 px-2 xl:max-w-[280px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={null}
                      size={null}
                      className="group !p-0 !mt-0 !w-full !bg-lightBlack/[0.04]"
                    >
                      <div className="menu-trigger-wrapper max-w-full cursor-pointer inline-flex min-w-0 w-full flex-1 outline-0">
                        <div className="theme-option w-full flex-1 relative overflow-hidden cursor-pointer bg-black/[0.04] rounded-lg py-2 pr-2.5 pl-3 transition-all">
                          <div className="content-wrapper gap-1 flex item-center opacity-30">
                            <div className="color-wrap mr-1 flex flex-wrap items-center">
                              <svg
                                className="w-5 h-5 fill-lightBlack/[0.64]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 8.024A6.024 6.024 0 0 1 8.024 2v12.048A6.024 6.024 0 0 1 2 8.024M8.024.5a7.524 7.524 0 1 0 0 15.048A7.524 7.524 0 0 0 8.024.5"
                                ></path>
                              </svg>
                            </div>
                            <div className="content-wrap max-w-full flex-1 flex items-center justify-between">
                              <div className="max-w-full text-base text-lightBlack/[0.64]">
                                Display
                              </div>
                              <div className="whitespace-nowrap capitalize text-base font-medium text-black/[0.36] pr-2">
                                Auto
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
                  <DropdownMenuContent align="end"></DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>       
      </div>
    </>
  );
};

export default ChangeThemeButton;
