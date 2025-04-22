import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
        colors: {
            product: {
                yellowDark: string
                yellow: string
                yellowLight: string
                purpleDark: string
                purple: string
                purpleLight: string
            }
            base: {
                title: string
                subtitle: string
                text: string
                label: string
                hover: string
                button: string
                input: string
                card: string
                background: string
                white: string
            }
        }
    }
}