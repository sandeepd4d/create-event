"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children  }) => {
  const [theme, setTheme] = useState("#c39832");
  const [font, setFont] = useState('system-ui');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [canBodyScroll, setCanBodyScroll] = useState(true);
  
  useEffect(()=>{
    canBodyScroll ? document.body.classList.remove('drawer-open'):document.body.classList.add('drawer-open');
  },[canBodyScroll]);

  const adjustTheme = (value) => {
    setTheme(value?.rgb);
    const shades = {
      50: shadeColor(value?.rgb, 85),
      100: shadeColor(value?.rgb, 75),
      200: shadeColor(value?.rgb, 60),
      300: shadeColor(value?.rgb, 45),
      400: shadeColor(value?.rgb, 30),
      500: `${value?.rgb.r}, ${value?.rgb.g}, ${value?.rgb.b}`, 
      600: shadeColor(value?.rgb, -15),
      700: shadeColor(value?.rgb, -30),
      800: shadeColor(value?.rgb, -45),
      900: shadeColor(value?.rgb, -60),
      950: shadeColor(value?.rgb, -75),
    };
    Object.keys(shades).forEach((key) => {
      document.documentElement.style.setProperty(`--primary-color-${key}`, shades[key]);
    });
  }
  function changeFontFamily(fontType) {
      setFont(fontType);
      document.documentElement.style.setProperty('--font-mono', fontType);
  }

  function shadeColor(hex, percent) {
  // Adjust RGB values based on the percentage (lighten or darken)
  let r = Math.min(255, Math.max(0, hex?.r + (hex?.r * percent) / 100));
  let g = Math.min(255, Math.max(0, hex?.g + (hex?.g * percent) / 100));
  let b = Math.min(255, Math.max(0, hex?.b + (hex?.b * percent) / 100));

  return `${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}`;
}

  return (
    <ThemeContext.Provider value={{ theme, adjustTheme, changeFontFamily, font, setFont, setCanBodyScroll, openDropdown, setOpenDropdown }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
