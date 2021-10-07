module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(135deg, #0368FF 0%, #FF3E95 100%)',
      },
    },
  },
  plugins: [],
}
