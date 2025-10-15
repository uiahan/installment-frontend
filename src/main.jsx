import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoute />    
    </BrowserRouter>
  </StrictMode>,
)
