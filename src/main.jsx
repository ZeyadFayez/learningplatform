import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";

import Assigment from "./Pages/assigment.jsx";
import Dashboard from "./Pages/dashboard.jsx";
import Signup from "./Pages/signup.jsx";
import Login from "./Pages/login.jsx";
import HomePage from "./Pages/HomePage.jsx"; 
import Feedback from "./Pages/Feedback.jsx";
import StudentHub from "./Pages/sutdenthub.jsx";
import Profile from "./Pages/profile.jsx";
import Course from "./Pages/course.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Router>
        <Toaster />
        <Routes>
     
          <Route path="/" element={<Login />} />
          <Route path="/homepage/Dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} /> 
          <Route path="/homepage/Dashboard/assigment" element={<Assigment />} />
          <Route path="/homepage/Dashboard/assigment/feedback" element={<Feedback />} />
          <Route path="/homepage/Dashboard/assigment/studenthub" element={<StudentHub />} />
          <Route path="/homepage/Dashboard/assigment/studenthub/profile" element={<Profile />} />
          <Route path="/homepage/Dashboard/course" element={<Course />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
