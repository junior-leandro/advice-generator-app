/*
### Primary
- Light Cyan: hsl(193, 38%, 86%)
- Neon Green: hsl(150, 100%, 66%)

### Neutral
- Grayish Blue: hsl(217, 19%, 38%)
- Dark Grayish Blue: hsl(217, 19%, 24%)
- Dark Blue: hsl(218, 23%, 16%)
*/

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      widest: '.2em'
    },
    colors: {
      'lightCyan': 'hsl(193, 38%, 86%)',
      'neonGreen': 'hsl(150, 100%, 66%)',
      'grayishBlue': 'hsl(217, 19%, 38%)',
      'darkGrayishBlue': 'hsl(217, 19%, 24%)',
      'darkBlue': 'hsl(218, 23%, 16%)'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 5px 60px -8px rgba(82, 255, 168, 1)',
      }
    },
  },
  plugins: [],
}
export default config