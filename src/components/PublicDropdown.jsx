import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Globe, Sparkles } from "lucide-react";

const PublicDropdown = ({ position, setPosition }) => {
  return (
    <div className="custom-dropdown w-full xxs:w-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={null} size={null} className="group !mt-0 !h-auto">
            <Globe className="h-4 w-4" />
            <span className="text-sm">Public</span>
            <svg
              className="w-4 h-4 stroke-primary-950/[0.64] group-hover:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
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
            <DropdownMenuRadioItem value="top" className="dropdown-menu-item dropdown-public">
              <span>
                <Globe className="mr-3 h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                <span className="text-sm">Public</span>
                <span className="text-sm text-lightBlack/[0.36]">
                  Shown on your calendar and eligible to be featured.
                </span>
              </div>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom" className="dropdown-menu-item dropdown-public">
              <span>
                <Sparkles className="mr-3 h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                <span className="text-sm">Private</span>
                <span className="text-sm text-lightBlack/[0.36]">
                  Unlisted. Only people with the link can register.
                </span>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PublicDropdown;
