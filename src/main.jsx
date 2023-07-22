import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StatesManagerFunction from './context/myContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <StatesManagerFunction>

    <App />

  </StatesManagerFunction>
  </BrowserRouter>
)
