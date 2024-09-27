import { useTheme } from "@/context/ThemeContext";
import { Globe, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PublicDropdown = ({ align }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("public");
  const {  setOpenDropdown, setCanBodyScroll } = useTheme();

  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(true);
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
  }, [status]);

  return (
    <>
      <div
        className={`custom-dropdown relative w-full xxs:w-auto ${
          isOpen ? "z-50" : "z-30"
        }`}
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          className="truncate full xxs:w-28 min-w-28 xxs:max-w-28 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group !mt-0 !h-auto"
        >
          {status === "public" ? (
            <Globe className="h-4 w-4" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          <span className="text-sm capitalize truncate flex-1 text-left">
            {status}
          </span>
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
          <div
            className={`custom-dropdown-menu ${
              align === "right" ? "right-0" : "left-0"
            } ${isOpen ? "show" : ""}`}
          >
            <div>
              <label
                htmlFor="public"
                className="pl-8 pr-2 dropdown-menu-item dropdown-calendar"
                aria-checked={status === "public"}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span>
                <span>
                  <Globe className="mr-3 h-4 w-4" />
                </span>
                <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                  <span className="text-sm">Public</span>
                  <span className="text-sm text-lightBlack/[0.36]">
                    Shown on your calendar and eligible to be featured.
                  </span>
                </div>
                <input
                  type="radio"
                  id="public"
                  name="status"
                  value="public"
                  onChange={() => setStatus("public")}
                />
              </label>
              <label
                htmlFor="private"
                className="pl-8 pr-2 dropdown-menu-item dropdown-calendar"
                aria-checked={status === "private"}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span>
                <span>
                  <Sparkles className="mr-3 h-4 w-4" />
                </span>
                <div className="flex flex-wrap items-center flex-cols text-lightBlack">
                  <span className="text-sm">Private</span>
                  <span className="text-sm text-lightBlack/[0.36]">
                    Unlisted. Only people with the link can register.
                  </span>
                </div>
                <input
                  type="radio"
                  id="private"
                  name="status"
                  value="private"
                  onChange={() => setStatus("private")}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PublicDropdown;
