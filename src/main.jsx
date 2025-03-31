import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from "./Pages/dashboard.jsx"
//import CreatePage from "./pages/createpage.jsx";
import HomePage from "./pages/homepage.jsx";
import { Toaster } from "@/components/ui/toaster";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
      <Toaster />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
