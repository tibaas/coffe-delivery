import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"
import { CartProvider } from "./context/ContextGlobal"

import { Router } from "./components/Router"

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

