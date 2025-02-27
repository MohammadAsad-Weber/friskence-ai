import React from "react";
import { BrowserRouter, Routes, Route } from "react-router"; // React-Router Imports

// Components
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
