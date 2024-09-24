/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@shadcn/ui/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '479px',
      },
      fontFamily: {
        'mono': ['var(--font-mono)'],
      },
      fontSize: {
        28: ['28px', '32px'],
        40: ['40px', '44px'],
      },
      colors: {
        secondary: "var(--secondary-color)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        lightBlack: "#131517",
        primary: {
          DEFAULT: "var(--primary-color)",
          50: "var(--primary-color-50)",
          100: "var(--primary-color-100)",
          200: "var(--primary-color-200)",
          300: "var(--primary-color-300)",
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
          600: "var(--primary-color-600)",
          700: "var(--primary-color-700)",
          800: "var(--primary-color-800)",
          900: "var(--primary-color-900)",
          950: "var(--primary-color-950)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "moving-radial":
          "radial-gradient(circle, rgba(var(--primary-color-950),0.2) 5%, rgba(var(--primary-color-950),0.06) 20%)",
      },
      boxShadow: {
        sliderDot: "0 1px 4px rgba(0,0,0,.1)",
        fonts:'rgba(0, 0, 0, 0.02) 0px 0.7px 2.7px 0px, rgba(0, 0, 0, 0.03) 0px 1.7px 6.9px 0px, rgba(0, 0, 0, 0.04) 0px 3.5px 14.2px 0px, rgba(0, 0, 0, 0.05) 0px 7.3px 29.2px 0px, rgba(0, 0, 0, 0.06) 0px 20px 80px 0px',
		    drawer:"0 1px 4px rgba(0,0,0,.1)"
      },
      keyframes: {
        move: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        "moving-bg": "move 10s ease-in-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
