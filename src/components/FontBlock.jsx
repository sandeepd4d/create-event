import { useTheme } from "@/context/ThemeContext";
import React from "react";

const FontBlock = ({ data, selected, setSelected }) => {
  const { changeFontFamily } = useTheme();
  return (
    <div
      className={`font-wrapper  ${selected === data?.label ? "selected" : ""}`}
      onClick={() => {
        changeFontFamily(data?.font);
        setSelected(data?.label);
      }}
    >
      <div className="icon-wrapper">
        <div className={`text-3xl pb-2 font-medium`}>Ag</div>
      </div>
      <div className="text-wrap">{data?.label}</div>
    </div>
  );
};

export default FontBlock;
