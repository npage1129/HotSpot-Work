import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from'./Login';
import SignUp from './SignUp';
import './App.css';
import {useState} from 'react';




function App() {
const [user, setUser]= useState(null)
const [isAuthenticated, setIsAuthenticated] = useState(false);

 

console.log("your doing great!")
  return (
    
    <Router>
      <Routes>
      <Route path= "/" element = {<Login setUser={setUser}/>} />
      <Route path= "/home" element = {<Home user={user} setUser={setUser}/> } />
      <Route path= "/signup" element = {<SignUp setUser={setUser}/>} />
      </Routes>
      </Router>
    
  );
}


export default App;
