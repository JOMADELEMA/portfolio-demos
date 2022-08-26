/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        //grid para layout
        'joma6': '4fr 1fr 1fr',
      }, 
      flex: {
        '25': '0 0 25%',
        '50': '0 0 50%',
        '100': '0 0 100%',
      },
      maxWidth: {
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
      },
      screens: {
        'xs': '480px',
        'xxs': '320px',
      },
      backgroundColor: {
        "f-bg": "#FAFAFA",
        "fdark-bg": "#292929",
        "f-hover1": "#F5F5F5",
        "fdark-hover1": "#3D3D3D",
        "f-pressed": "#E0E0E0",
        "fdark-pressed": "#1F1F1F",
        "f-selected": "#EBEBEB",
        "fdark-selected": "#383838",           
      },
      colors: {
        "f-green-bg1":"#F1FAF1",
        "fdark-green-bg1":"#052505",
        "f-green-bg2":"#9FD89F",
        "fdark-green-bg2":"#094509",
        "f-green-bg3":"#107C10",
        "fdark-green-bg3":"#107C10",
        "f-green-fg1":"#0E700E",
        "fdark-green-fg1":"#54B054",
        "f-green-fg2":"#094509",
        "fdark-green-fg2":"#9FD89F",
        "f-green-fg3":"#107C10",
        "fdark-green-fg3":"#359B35",
        
      }, 
      height: {
        "contenedor": "90%",
      },
    },
  },
  plugins: [],
}
