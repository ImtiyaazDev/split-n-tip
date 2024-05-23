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
			},
			keyframes: {
				glow: {
					"0%, 100%": {
						textShadow:
							"0 0 2px #ddd6fe, 0 0 5px #ddd6fe, 0 0 10px #ddd6fe, 0 0 15px #a78bfa, 0 0 20px #a78bfa, 0 0 25px #a78bfa, 0 0 30px #a78bfa"
					},
					"50%": {
						textShadow:
							"0 0 1px #ddd6fe, 0 0 3px #ddd6fe, 0 0 5px #ddd6fe, 0 0 7px #a78bfa, 0 0 10px #a78bfa, 0 0 15px #a78bfa, 0 0 20px #a78bfa"
					}
				}
			},
			animation: {
				glow: "glow 2.5s ease-in-out infinite"
			}
		}
	},
	plugins: []
};
