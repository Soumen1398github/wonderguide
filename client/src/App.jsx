import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchbar from "./component/Searchbar";


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/se" element={<Searchbar/>}/>
        
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
