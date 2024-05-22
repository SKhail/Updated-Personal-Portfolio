
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'hero-section': '#f0f3ff',
        'purple-section': '#5e3bee',
        'purple-400': '#c084fc',
        'my-black': '#000000',
        'yellow-400': '#fbbf24'
      },
      fontFamily: {
        header: ["Merriweather", "serif"],
        body: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
