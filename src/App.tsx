import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"
import { Intro } from "./components/Intro"
import { CoffeList } from "./components/CoffeList"

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Intro/> 
      <CoffeList /> 
      <GlobalStyle />
    </ThemeProvider>
  )
}

