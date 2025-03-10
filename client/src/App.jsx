import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
// import About from "./pages/About";
import Contact from "./pages/Home/Contact";
import Policies from "./pages/Home/Policies";
import UserAccount from "./pages/Auth/UserAccount";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/useraccount" element={<UserAccount />} />
      </Routes>
    </Router>
  );
}
