import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"
import { Intro } from "./components/Intro"

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Intro/>  
      <GlobalStyle />
    </ThemeProvider>
  )
}

