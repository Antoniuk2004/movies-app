/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bgColor: "#f2f2f3",
                primaryColor: "#0065fd",
                playButton: "#d00000",
                playButtonBorder: "#ee0000",
                hoverColor: "#e6e6e6",
                borderColor: "#ebebeb"
            }
        },
    },
    plugins: [],
}

