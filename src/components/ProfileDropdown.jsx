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

const PorfileDropdown = () => {
  return (
    <div className="custom-dropdown profile-menu w-full sm:w-auto">
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
                <span className="text-sm text-lightBlack/[0.64]">Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span className="text-sm text-lightBlack/[0.64]">Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PorfileDropdown;
