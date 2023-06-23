import React from 'react'
import Sidebar from './components/Sidebar'
import GlobalStyle from './assets/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './assets/styles/theme'

function App() {

  return (

    <ThemeProvider theme={theme}>
    {/* O tema vindo do assets */}
    <div>
      <GlobalStyle />
      <h1>Meu primeiro componente</h1>
      <Sidebar />
    </div>

    </ThemeProvider>
  )
}

export default App
