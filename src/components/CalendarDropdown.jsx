import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { CalendarDays, CalendarDaysIcon, Plus } from "lucide-react";

const CalendarDropdown = ({ position, setPosition }) => {
  return (
    <div className="custom-dropdown w-full sm:w-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="group !mt-0">
            <CalendarDays className="h-4 w-4" />
            <span className="text-sm">Personal Calendar</span>
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
        <DropdownMenuContent align="start" className="w-64">
          <DropdownMenuLabel>
            Choose the calendar of the event:
          </DropdownMenuLabel>

          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem icon="CircleCheck" value="top">
              <span>
                <CalendarDaysIcon className="mr-2 h-4 w-4" />
              </span>
              Personal Calendar
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem icon="CircleCheck" value="bottom">
              <span>
                <CalendarDaysIcon className="mr-2 h-4 w-4" />
              </span>
              Offical Calendar
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              <span className="text-base">Create Calendar</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex flex-wrap items-center gap-2">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M.25 8a7.75 7.75 0 1 1 15.5 0A7.75 7.75 0 0 1 .25 8m6.2-.375a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v3.25h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2.5H7.2a.75.75 0 0 1-.75-.75m1.5-1.875a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
                ></path>
              </svg>
              <span className="w-[calc(100%-24px)]">
                Creating the event under a calendar grants its admins manage
                access.
              </span>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CalendarDropdown;
