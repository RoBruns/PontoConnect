import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-noto-sans)",
        logo: "var(--font-kanit)",
      },
      backgroundImage: {
      },
      colors: {
        green: {
          dark: "#0C1710"
        },
      },
    },
  },
  plugins: [],
}
export default config
