/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    width: {
      '1024': '1024px',
      '600': "600px",
      '700': "700px",
      '400': "400px"
    },
    // extend: {
    //   colors: {
    //     cyan: { A400: "#00daf7" },
    //     indigo: { A200: "#6979f8" },
    //     light_blue: { 400: "#1abcfe" },
    //     red: { 400: "#de6944" },
    //     black: {
    //       900: "#000000",
    //       "900_1c": "#0000001c",
    //       "900_0a": "#0000000a",
    //       "900_0f": "#0000000f",
    //       "900_14": "#00000014",
    //     },
    //     gray: {
    //       50: "#f5f9ff",
    //       100: "#f5f5f5",
    //       400: "#bdbdbd",
    //       600: "#696f79",
    //       800: "#494949",
    //       "400_01": "#b9b9b9",
    //     },
    //     green: { 500: "#4caf50", A400: "#0acf83", A700: "#07ad36" },
    //     deep_orange: { 300: "#ff7262", 600: "#f24e1e", A400: "#ff3d00" },
    //     deep_purple: { A200: "#a259ff" },
    //     blue_gray: { 400: "#8591a5" },
    //     blue: { 700: "#1565d8", "700_01": "#1976d2" },
    //     amber: { 500: "#ffc107" },
    //     white: { A700: "#ffffff" },
    //   },
    //   boxShadow: {
    //     bs: "0px 4px  10px 3px #0000001c",
    //     bs1: "0px 4px  14px 1px #0000000a",
    //     bs2: "0px 4px  10px 0px #00000014",
    //   },
    //   fontFamily: {
    //     inter: "Inter",
    //     gilroy: "Gilroy",
    //     sfprotext: "SF Pro Text",
    //     sfprodisplay: "SF Pro Display",
    //     gayathri: "Gayathri",
    //   },

    // },
  },
  plugins: [],
}

