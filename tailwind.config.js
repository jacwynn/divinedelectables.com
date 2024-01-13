/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#D9534F",
        "brand-black": "#333333",
        "brand-grey": "#717171",
        "brand-bg-grey": "#FAFAFA",
        "brand-bg-white": "#FFFFFF",
      },
      fontFamily: {
        serif: ["PT Serif", "serif"],
        seaweed: ["SeaweedScript", "cursive"],
        berkshire: ["BerkshireSwash", "serif"],
      },
      backgroundImage: (theme) => ({
        "footer-texture": 'url("/images/footer-bg.png")',
      }),
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-list-icon": {
          display: "flex",
          alignItems: "center",
          position: "relative",
          paddingLeft: "2em",
        },
        ".custom-list-icon::before": {
          content: '""',
          display: "inline-block",
          width: "1em",
          height: "1em",
          position: "absolute",
          left: "0",
          backgroundImage: 'url("/images/checked-circle.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        },
      };
      addUtilities(newUtilities, ["before"]);
    },
  ],
};
