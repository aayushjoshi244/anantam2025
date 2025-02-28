/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-w-400": "400px", // Custom screen for min-width 600px
        "between-768-900": { min: "768px", max: "900px" },
        "min-w-1024": "1024px",
      },
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        gold: {
          100: "#ecb923",
          300: "#f2be22",
        },
        primary: {
          DEFAULT: "#2C1E36", // Use your hex value here
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#151A20", // Hex value for secondary
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#FF530A", // Fix the typo
          foreground: "hsl(var(--accent-foreground))",
        },
        purple: {
          DEFAULT: "#6319BE", // Fix the typo
          foreground: "hsl(var(--purple-foreground))",
        },
        pink: {
          DEFAULT: "#da39ae", // Fix the typo
          foreground: "hsl(var(--pink-foreground))",
        },
        lightpink:{
          DEFAULT: "#E096CB"
        },
        background: "#000000",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        customYellow: "#FFD700",
      },
      variants: {
        extend: {
          backgroundColor: ["hover", "focus", "responsive"],
          borderRadius: ["responsive", "hover", "focus"],
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInDown: "slideInDown 1s ease-out",
        fadeInUp: "fadeInUp 1.5s ease-in-out",
        fadeInDown: "fadeInDown 1.5s ease-in-out",
        fadeInLeft: "fadeInLeft 1.5s ease-in-out",
        fadeInRight: "fadeInRight 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
          fadeInUp: {
            "0%": { opacity: "0", transform: "translateY(30px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          fadeInDown: {
            "0%": { opacity: "0", transform: "translateY(-30px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          fadeInLeft: {
            "0%": { opacity: "0", transform: "translateX(-30px)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
          fadeInRight: {
            "0%": { opacity: "0", transform: "translateX(30px)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
        },
        slideInDown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        "@media (hover: none) and (pointer: coarse)": {
          ".disable-hover": {
            "&:hover": {
              backgroundColor: "transparent !important",
            },
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
