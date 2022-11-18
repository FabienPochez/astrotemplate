const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	// daisyUI config (optional)
	daisyui: {
		themes: [
			{
			  mytheme: {
	 			"primary": "#ffced10",
				"secondary": "#cbe0e5",
			  	"accent": "#37CDBE",
			  	"neutral": "#d0d0d0",
			  	"base-100": "#FAFAFA",
			  	"info": "#00B4EC",
			  	"success": "#2fac66",
			  	"warning": "#fcea10",
			  	"error": "#ea592b",
			  },
			},
		  ],
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",

	},
	plugins: [require('@tailwindcss/typography')],
	plugins: [require("daisyui")],
	darkMode: 'class',
	
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
