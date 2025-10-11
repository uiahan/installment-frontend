import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Login from './App'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoute />    
    </BrowserRouter>
  </StrictMode>,
)
