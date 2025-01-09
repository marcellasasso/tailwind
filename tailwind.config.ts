import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
      },

      maxWidth: {
        app: '700px',
      },
      colors: {
        diego: '#333',
      },
    },
  },
  plugins: [],
} satisfies Config
