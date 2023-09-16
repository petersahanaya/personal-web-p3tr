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
        workSans: ['__Work_Sans_714251', '__Work_Sans_Fallback_714251', 'sans-serif'],
        bebasNeue: ['__Bebas_Neue_ea6fb5', 'sans-serif'],
        inter: ['__Inter_60301e', 'sans-serif'],
      },
    },
    keyframes: {
      slider: {
        from: {
          transform: 'translateX(0%)',
        },
        to: {
          transform: 'translateX(-100%)',
        },
      },
    },
    animation: {
      slider: 'slider 20s infinite linear',
    },
  },
  plugins: [],
}
export default config
