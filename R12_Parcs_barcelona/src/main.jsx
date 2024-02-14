import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Parque from './Parque';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
          <Route path="/parques/:id" element={<Parque/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
