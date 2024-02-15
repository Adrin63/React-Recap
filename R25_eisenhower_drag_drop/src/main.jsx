import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from './App'
import Inici from "./components/Inici";
import Matrix from './components/Matrix';
import Test from './components/Test';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Inici />} />
          <Route path="/matrix" element={<Matrix />} />
          <Route path="/test" element={<Test />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
