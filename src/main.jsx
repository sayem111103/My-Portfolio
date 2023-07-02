import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CursorContext from './CursorContext/CursorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CursorContext>
      <App />
    </CursorContext>
  </React.StrictMode>,
)
