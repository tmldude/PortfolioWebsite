import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Boogle from './pages/boogle';

function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/boogle' element={<Boogle />}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default App;