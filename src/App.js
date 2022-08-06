import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Foom from './pages/foom';

function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Foom' element={<Foom />}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default App;