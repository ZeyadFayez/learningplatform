import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import CreatePage from "./pages/createpage.jsx";
import HomePage from "./pages/homepage.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
