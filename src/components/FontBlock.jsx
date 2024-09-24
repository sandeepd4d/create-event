import { useTheme } from "@/context/ThemeContext";
import React from "react";

const FontBlock = ({data, selected, setSelected}) => {
    const { changeFontFamily } = useTheme();
  return (
    <div
      className={`font-wrapper  ${
        selected === data?.label ? "selected" : ""
      }`}
      onClick={() => {
        changeFontFamily(data?.font);
        setSelected(data?.label);
      }}
    >
      <div className="icon-wrapper">
        <svg
          className="w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 88 88"
        >
          <path
            fill="currentColor"
            d="M6 61.094h8.438l3.812-11.657h16.781l3.813 11.657h8.468L31.189 16h-9.063zM26.563 24.03h.187L33 43.22H20.281zM66.25 72.688c9.594 0 15.625-5.032 15.625-12.532V27.97h-7.781v5.625h-.188c-1.875-3.813-5.5-6.313-10.187-6.313-8.375 0-13.782 6.438-13.782 16.907v.03c0 10.313 5.344 16.688 13.657 16.688 4.75 0 8.5-2.25 10.343-5.781h.157v4.781c0 4.219-2.781 6.907-7.844 6.907-4.062 0-6.719-1.438-7.562-3.344l-.094-.25h-7.657L51 63.5c.938 5.188 6.469 9.188 15.25 9.188m-.219-17.782c-5 0-8.156-4.031-8.156-10.562v-.032c0-6.437 3.156-10.468 8.156-10.468 4.813 0 8.094 4.093 8.094 10.5v.031c0 6.438-3.25 10.531-8.094 10.531"
          ></path>
        </svg>
      </div>
      <div className="text-wrap">
        {data?.label}
      </div>
    </div>
  );
};

export default FontBlock;
