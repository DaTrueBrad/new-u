/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
    "./screens/HomeScreen.jsx",
    "./components/history/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    // "./components/history/HistoryDropdown.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
