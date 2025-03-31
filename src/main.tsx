import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvideer } from './store/todos.tsx'
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvideer>
        <App />
      </TodoProvideer>
    </BrowserRouter>
  </React.StrictMode>,
)

