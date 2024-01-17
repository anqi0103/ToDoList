import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Hooking up the index.html with the react code
// Using Javascript for React to get the root element and render the application inside of where <App /> is
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
