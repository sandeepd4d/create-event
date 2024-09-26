import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PorfileDropdown = ({align}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className="custom-dropdown profile-menu relative w-full xxs:w-auto"
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group !mt-0 !h-auto"
        >
          <Image
            aria-hidden
            src="/avatar_2.png"
            alt="Window icon"
            width={24}
            height={24}
          />
        </button>
        {isOpen && (
          <div className={`custom-dropdown-menu ${align==="right"?'right-0':'left-0'} ${isOpen ? "show" : ""}`}>
            <div>
              <label className="dropdown-menu-item dropdown-calendar">
                <div className="flex flex-wrap gap-4">
                  <div className="profile-icon flex flex-wrap items-center justify-center">
                    <Image
                      aria-hidden
                      src="/avatar_2.png"
                      alt="Window icon"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="profile-meta">
                    <div className="text-base font-medium text-lightBlack capitalize">
                      Sandeep Kamra
                    </div>
                    <div className="text-[13px] text-lightBlack/[0.36]">
                      sandeep.d4d@gmail.com
                    </div>
                  </div>
                </div>
              </label>
              <label className="dropdown-menu-item">
                <span className="text-sm text-lightBlack/[0.64]">
                  View Profile
                </span>
              </label>
              <label className="dropdown-menu-item">
                <span className="text-sm text-lightBlack/[0.64]">Settings</span>
              </label>
              <label className="dropdown-menu-item">
                <span className="text-sm text-lightBlack/[0.64]">Sign Out</span>
              </label>
            </div>
          </div>
        )}
      </div>
      {/* <div className="custom-dropdown profile-menu w-full sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={null}
              size={null}
              className="group !mt-0 !rounded-full !w-8 !h-8 xxs:!w-10 xxs:!h-10 overflow-hidden !p-1 xxs:!py-1.5 xxs:!px-2"
            >
              <Image
                aria-hidden
                src="/avatar_2.png"
                alt="Window icon"
                width={24}
                height={24}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-64 !p-0 rounded-lg after:-top-1 after:right-3 after:w-[10px] after:absolute after:inline-block after:content-[''] after:border-r-4 after:border-l-4 after:border-r-transparent after:border-l-transparent after:border-b-4 after:!border-b-white"
          >
            <div className="wrap max-w-[95vw] bg-white rounded-lg backdrop-blur-lg shadow-fonts p-1">
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-wrap gap-4">
                    <div className="profile-icon flex flex-wrap items-center justify-center">
                      <Image
                        aria-hidden
                        src="/avatar_2.png"
                        alt="Window icon"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="profile-meta">
                      <div className="text-base font-medium text-lightBlack capitalize">
                        Sandeep Kamra
                      </div>
                      <div className="text-[13px] text-lightBlack/[0.36]">
                        sandeep.d4d@gmail.com
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <span className="text-sm text-lightBlack/[0.64]">
                    View Profile
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span className="text-sm text-lightBlack/[0.64]">
                    Settings
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span className="text-sm text-lightBlack/[0.64]">
                    Sign Out
                  </span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
    </>
  );
};

export default PorfileDropdown;
