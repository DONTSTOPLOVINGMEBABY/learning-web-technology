import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FlagProvider from './FlagProvider.jsx'

let config = {
  url : 'https://opensourcefeatureflags.com', 
  apiKey : 'an-api-key'
}


ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>,
)
