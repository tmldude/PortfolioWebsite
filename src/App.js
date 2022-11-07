import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Header/Navigation";
import "./sass/main.scss";

import Home from "./pages/home";
import Foom from "./pages/foom";
// import WhatFoom from "./pages/whatFoom";
import Chess from "./pages/chess";
// import AboutChess from "./pages/aboutchess";
import PageNotFound from "./pages/pagenotfound";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>        
        <Route path="/home" element={<Home />}></Route> 
        <Route path="/chess" element={<Chess />}></Route>
        {/* <Route path="/aboutchess" element={<AboutChess />}></Route> */}
        <Route path="/foom" element={<Foom />}></Route>        
        {/* <Route path="/whatfoom" element={<WhatFoom />}></Route> */}

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
