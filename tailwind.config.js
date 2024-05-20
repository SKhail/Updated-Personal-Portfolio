
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-section': '#f0f3ff',
        'purple-section': '#5e3bee',
        'my-black': '#000000'
      },
      fontFamily: {
        header: ["Merriweather", "serif"],
        body: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
