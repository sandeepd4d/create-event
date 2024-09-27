import React, { useEffect, useRef, useState } from "react";
import { CalendarDays, CalendarDaysIcon, Plus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const CalendarDropdown = () => {
  const { setOpenDropdown, setCanBodyScroll} = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [calendar, setCalendar] = useState("personal");
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(true)
    setCanBodyScroll(false)
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setOpenDropdown(null);
      setCanBodyScroll(true)
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setCanBodyScroll(true)
  }, [calendar]);

  return (
    <>
      <div
        className={`custom-dropdown relative w-full xxs:w-auto ${isOpen ? 'z-50':'z-30'}`}
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          className="truncate full xxs:w-48 min-w-48 xxs:max-w-48 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group !mt-0 !h-auto"
        >
          <CalendarDays className="h-4 w-4" />
          <span className="text-sm capitalize truncate flex-1 text-left">{`${calendar} calendar`}</span>
          <svg
            className="w-4 h-4 stroke-primary-950/[0.64] lg:group-hover:stroke-white"
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
        </button>
        {isOpen && (
          <div className={`custom-dropdown-menu tooltip-left ${isOpen ? "show" : ""}`}>
            <div className="px-2 py-1.5 text-sm font-semibold dropdown-menu-label">
              Choose the calendar of the event:
            </div>
            <div>
              <label
                htmlFor="personal"
                className="dropdown-menu-item dropdown-calendar"
                aria-checked={calendar === "personal"}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span>
                <span>
                  <CalendarDaysIcon className="mr-3 h-4 w-4" />
                </span>
                <input
                  type="radio"
                  id="personal"
                  name="calendar"
                  value="Personal Calendar"
                  onChange={() => setCalendar("personal")}
                />
                Personal Calendar
              </label>
              <label
                htmlFor="hola"
                className="pl-8 pr-2 dropdown-menu-item dropdown-calendar"
                aria-checked={calendar === "hola"}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span>
                <span>
                  <CalendarDaysIcon className="mr-3 h-4 w-4" />
                </span>
                <input
                  type="radio"
                  id="hola"
                  name="calendar"
                  value="Hola Calendar"
                  onChange={() => setCalendar("hola")}
                />
                Hola Calendar
              </label>
              <label
                htmlFor="create"
                className="text-zinc-500 dropdown-menu-item"
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span>
                <span>
                  <Plus className="mr-3 h-4 w-4" />
                </span>
                Create Calendar
              </label>
            </div>
            <div className="px-2 py-1.5 text-sm font-semibold !py-2.5 dropdown-menu-label">
              <div className="flex flex-wrap items-center">
                <svg
                  className="w-4 h-4 mr-3 fill-lightBlack/[0.36]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M.25 8a7.75 7.75 0 1 1 15.5 0A7.75 7.75 0 0 1 .25 8m6.2-.375a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v3.25h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2.5H7.2a.75.75 0 0 1-.75-.75m1.5-1.875a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
                  ></path>
                </svg>
                <span className="w-[calc(100%-28px)]">
                  Creating the event under a calendar grants its admins manage
                  access.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CalendarDropdown;
