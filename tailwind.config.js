module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#C6DBFF',
        primary: '#3B82F6',
        dark: '#193766',
        muted: '#697B98',
      },
      boxshadow: {
        darken: '0px 30px 60px rgba(25, 55, 102, 0.25)',
        lighten: '0px 30px 60px rgba(59, 130, 246, 0.25',
      },
      spacing: {
        'double-screen': '200vh',
        'large-screen': '108vh',
      },
      backgroundImage: {
        rectangle: "url('/src/assets/Rectangle.svg')",
      },
    },
  },
  plugins: [require('daisyui')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
