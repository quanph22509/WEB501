/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./components/*.{js,ts,jsx,tsx}","./pages/*.{js,ts,jsx,tsx}"],
    // Bật prefix nếu muốn dùng cả bootstrap và tailwind
    // prefix: "tw-",
    theme: {
        extend: {},
    },
    plugins: [],
};
