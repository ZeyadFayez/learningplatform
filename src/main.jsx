import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";

import Assigment from "./Pages/assigment.jsx";
import Dashboard from "./Pages/dashboard.jsx";
import Signup from "./Pages/signup.jsx";
import Login from "./Pages/login.jsx";
import HomePage from "./Pages/HomePage.jsx"; // Correct import for HomePage
import Feedback from "./Pages/Feedback.jsx"; // Correct import for Feedback

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Router>
        <Toaster />
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Login />} />
          <Route path="/homepage/Dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} /> {/* Correct path */}
          <Route path="/homepage/Dashboard/assigment" element={<Assigment />} />
          <Route path="/homepage/Dashboard/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
