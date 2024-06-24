import "./App.css";
// import React from "react";
import Home from "./Pages/Home/Home";
import Training from "./Pages/Training/Training";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Scrooltotop from "./Components/Scrooltotop";

function App() {
  return (
    <div className="App">
      <Scrooltotop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Scrooltotop>
    </div>
  );
}

export default App;
