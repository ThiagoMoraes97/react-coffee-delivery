import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { defaultTheme } from './styles/themes/default'
import  { ThemeProvider } from 'styled-components'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Theme>
        <GlobalStyle />
        <Router />
      </Theme>
    </ThemeProvider>
  </StrictMode>,
)
