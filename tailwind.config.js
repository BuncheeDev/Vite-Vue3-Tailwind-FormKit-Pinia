
import FormKitTailwind from '@formkit/themes/tailwindcss'
export default {

    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      './tailwind-theme.js',
    ],

  theme: {
    extend: {},
  },
  plugins: [
    FormKitTailwind
  ],
}

