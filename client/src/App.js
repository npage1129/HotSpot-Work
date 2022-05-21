import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from'./Login';
import './App.css';


function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path= "/" element = {<Login/>} />
      <Route path= "/home" element = {<Home/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
