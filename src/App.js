import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Header/Navigation";
import "./sass/main.scss";

import Home from "./pages/home";
import Foom from "./pages/foom";
import AboutMe from "./pages/aboutme";
import Chess from "./pages/chess";
import PageNotFound from "./pages/pagenotfound";
import WhatFoom from "./pages/whatFoom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Foom />}></Route>
        <Route path="/Foom" element={<Foom />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/chess" element={<Chess />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/whatfoom" element={<WhatFoom />}></Route>
        
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
