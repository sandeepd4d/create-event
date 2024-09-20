import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Globe, Plus, Sparkles } from "lucide-react";

const PorfileDropdown = ({ position, setPosition }) => {
  const [showPublicStatus, setShowPublicStatus] = useState(true);
  const [showPrivateStatus, setShowPrivateStatus] = useState(false);
  return (
    <div className="custom-dropdown w-full sm:w-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="group !mt-0">
            <Globe className="h-4 w-4" />
            <span className="text-sm">Public</span>
            <svg
              className="w-4 h-4 stroke-brown-950/[0.64] group-hover:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">
              <span>
                <Globe className="mr-2 h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                <span className="text-sm">Public</span>
                <span className="text-sm">
                  Shown on your calendar and eligible to be featured.
                </span>
              </div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">
              <span>
                <Sparkles className="mr-2 h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                <span className="text-sm">Private</span>
                <span className="text-sm">
                  Unlisted. Only people with the link can register.
                </span>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          {/* <DropdownMenuGroup>
            <DropdownMenuCheckboxItem
              checked={showPublicStatus}
              onCheckedChange={setShowPublicStatus}
            >
              <span>
                <Globe className="mr-2 h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                <span className="text-sm">Public</span>
                <span className="text-sm">
                  Shown on your calendar and eligible to be featured.
                </span>
              </div>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPrivateStatus}
              onCheckedChange={setShowPrivateStatus}
            >
              <span>
                <Sparkles className="mr-2 h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                <span className="text-sm">Private</span>
                <span className="text-sm">
                  Unlisted. Only people with the link can register.
                </span>
              </div>
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PorfileDropdown;
