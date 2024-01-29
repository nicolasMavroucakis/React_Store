import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CarrinhoContextProvider } from './context/CarrinhoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarrinhoContextProvider>
      <App />
    </CarrinhoContextProvider>
  </React.StrictMode>,
)
