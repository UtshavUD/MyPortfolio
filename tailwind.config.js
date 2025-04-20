/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      bungee: ['"Bungee Spice"', 'cursive'],
      faster: ['"Faster One"', 'cursive'],
      bungee1:["Bungee tint",'Sans-serif'],
      lemon:["Lemon",'serif'],
      ojuju:["Ojuju", 'Sans-serif'],
      pompiere:["Pompiere", 'Sans-serif'],
      kavivanar:["Kavivanar", 'cursive']
},
  },
},
  plugins: [],
}