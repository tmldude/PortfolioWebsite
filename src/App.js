import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from "./components/Header/Navigation";
import './sass/main.scss';

import Home from './pages/home';
import Foom from './pages/foom';
import Compsci from './pages/compsci';
import Psych from './pages/psych';
import AboutMe from './pages/aboutme';
import Chess from './pages/chess';
import PageNotFound from './pages/pagenotfound';

function App() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Foom' element={<Foom />}></Route>
          <Route path='/compsci' element={<Compsci/>}></Route>
          <Route path='/psych' element={<Psych />}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/chess' element={<Chess />}></Route>

          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default App;