import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkModeProvider } from './context/DarkModeContext'
import './components/style/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
)
