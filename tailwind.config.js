export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0D0C0A',
        ivory: '#F2EDE4',
        gold: '#C9A96E',
        'gold-light': '#E2C99A',
        forest: '#2C3E35',
        'forest-light': '#3D5548',
        bronze: '#8B7355',
        smoke: '#1A1915',
        mist: '#9B9590',
        parchment: '#FAF7F2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
