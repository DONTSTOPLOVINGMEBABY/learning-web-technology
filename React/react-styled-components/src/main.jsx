import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import { ThemeProvider } from 'styled-components'


const theme = {
  dark: "grey"
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
