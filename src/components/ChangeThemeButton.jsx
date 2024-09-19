import React from "react";

const ChangeThemeButton = () => {
  return (
    <button className="change-theme-button" name="">
      <img
        src="https://images.lumacdn.com/themes/thumb/minimal.jpg"
        alt="Minimal Theme"
        className="w-12"
      />
      <div className="button-text-wrap">
        <div className="theme-text">Theme</div>
        <div className="theme-type">Minimal</div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="w-4 h-4 fill-brown-950/[.36]"
        >
          <path
            className=""
            fillRule="evenodd"
            d="M10.217 3.22c.354-.354.456-.451.543-.51.42-.28.969-.28 1.389 0 .087.059.189.156.543.51s.45.456.509.543c.28.42.28.968 0 1.389-.058.086-.155.189-.509.543l-.53.53L9.687 3.75zm-1.59 1.59L11.1 7.287l-5.76 5.76a1.25 1.25 0 0 1-.963.363l-.49-.031c-.48-.03-.768-.05-.977-.09-.185-.036-.213-.072-.214-.074-.001 0-.037-.028-.073-.213-.04-.209-.06-.498-.09-.978l-.031-.489a1.25 1.25 0 0 1 .363-.963zm1.3-3.347c-.227.152-.441.366-.719.644l-.052.052-1.06 1.06-6.29 6.291a2.75 2.75 0 0 0-.8 2.12l.03.489.003.042c.027.424.052.81.113 1.124.066.345.191.697.485.99.293.293.645.419.99.485.314.06.7.085 1.124.112l.042.003.489.031a2.75 2.75 0 0 0 2.12-.8l6.29-6.29 1.06-1.06.052-.053c.278-.277.493-.491.644-.718a2.75 2.75 0 0 0 0-3.056c-.151-.226-.366-.44-.644-.718l-.051-.052-.052-.052c-.278-.278-.492-.492-.719-.644a2.75 2.75 0 0 0-3.055 0m.578 11.986a.75.75 0 1 0 0 1.5h4a.75.75 0 1 0 0-1.5z"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default ChangeThemeButton;
