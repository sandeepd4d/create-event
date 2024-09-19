import React from "react";
import ChangeThemeButton from "./ChangeThemeButton";
import UploadImage from "./UploadImage";

const Left = () => {
  return (
    <div className="left-side">
      {/* Image part */}
      <UploadImage />

      {/* Change Theme Button */}
      <ChangeThemeButton />
    </div>
  );
};

export default Left;
