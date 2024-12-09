/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'custom-pattern': "url('src/assets/overlay2.png'), url('src/assets/overlay4.svg'), linear-gradient(45deg, #2575fc, #6a11cb 50%, #6a11cb 95%)",
        // 'custom-pattern-reverse': "url('src/assets/overlay2.png'), url('src/assets/overlay3.svg'), linear-gradient(45deg, #9dc66b 5%, #4fa49a 40%, #4361c2)",
        'custom-pattern-reverse': "url('src/assets/overlay2.png'), url('src/assets/overlay3.svg'), linear-gradient(45deg, #6a11cb 5%, #6a11cb 40%, #2575fc)",
      },
      backgroundPosition: {
        'custom-pos': 'top left, center center, center center',
      },
      backgroundSize: {
        'custom-size': 'auto, cover, cover',
      },
      screens: {
        "xs": "400px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [
    typography,
  ],
}

