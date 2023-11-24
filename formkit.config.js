
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from "@formkit/icons"
import genesis from '@formkit/themes/dist/tailwindcss/genesis'
// import myTailwindTheme from './tailwind-theme'
export default {
  icons: {
    ...genesisIcons
  },
  config: {
    classes: generateClasses(genesis )
  }
}