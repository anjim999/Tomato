import ReactDOM from 'react-dom/client';  // Add this import
import { StrictMode } from 'react'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
