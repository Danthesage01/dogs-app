import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleDog from "./pages/SingleDog";
import Navbar from "./components/Navbar"

function App() {

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="dog/:id" element={ <SingleDog />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>

  );
}

export default App;
