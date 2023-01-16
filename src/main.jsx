import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Practicantes} from './Practicantes/Practicantes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Practicantes />
    {/* <App /> */}
  </React.StrictMode>,
)
