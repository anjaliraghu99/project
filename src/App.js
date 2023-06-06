import './App.css';
import Nabvar from './component/Navbar'
import Pic from './component/Pic'
import Login from './component/Login'
import About from './component/About'
import Loan from './component/Loan'
import Home from './component/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Loan' element={<Loan />}/>
      </Routes>
    </Router>
  );
}

export default App;
