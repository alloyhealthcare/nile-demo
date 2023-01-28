/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      container: {
        center: true,
        padding: {
          lg: "4.375rem",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xxs: ".625rem",
      },
      transitionProperty: {
        width: "width",
      },
      height: {
        bigCard: "720px",
        144: "34em",
        200: "41.5em",
      },
      width: {
        editorSubMenu: "508px",
        moduleCard: "416px",
        sidebar: "350px",
      },
      colors: {
        fog: "#F3F5F9",
        ultraLightGray: "#FBFBFD",
        teal: {
          light: "#EDF9FA",
          DEFAULT: "#4CC4CC",
          dark: "#154549",
        },
        slateTransparent: {
          3: "#F1F1F3",
        },
      },
      screens: {
        "3xl": "1800px",
      },
      backgroundImage: {
        "image-fog": "url('@/assets/img/bg-image.png')",
      },
    },
  },
  plugins: [],
};
