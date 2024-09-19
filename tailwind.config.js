/** @type {import('tailwindcss').Config} */
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
  		maxWidth: {
  			cxl: '960px'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			lightBlack:"#131517",
  			brown: {
  				'50': '#fff0f0',
  				'100': '#ffdddd',
  				'200': '#ffc1c1',
  				'300': '#ff9696',
  				'400': '#ff5a5a',
  				'500': '#ff2727',
  				'600': '#fb0707',
  				'700': '#d40101',
  				'800': '#ae0606',
  				'900': '#900c0c',
  				'950': '#490000'
  			},
  			orange: {
  				'50': '#fff7ec',
  				'100': '#ffeed2',
  				'200': '#ffd8a4',
  				'300': '#ffbc6b',
  				'400': '#ff942f',
  				'500': '#ff7307',
  				'600': '#f95600',
  				'700': '#c53c00',
  				'800': '#a33209',
  				'900': '#832c0b',
  				'950': '#471303'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'moving-radial': 'radial-gradient(circle, rgba(197,60,0,0.2) 5%, rgba(197,60,0,0.06) 20%)'
  		},
  		boxShadow: {
  			sliderDot: '0 1px 4px rgba(0,0,0,.1)'
  		},
  		keyframes: {
  			move: {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
  				}
  			}
  		},
  		animation: {
  			'moving-bg': 'move 10s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
