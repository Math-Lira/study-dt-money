import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    __brand?: string // Propriedade apenas para satisfazer o ESLint
  }
}
