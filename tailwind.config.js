/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: "Nokora, Helvetica, Arial, sans-serif"
		},
		extend: {
			fontFamily: {
				heading: "Paytone One, Helvetica, Arial, sans-serif"
			}
		}
	},
	plugins: []
};
