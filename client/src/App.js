import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from'./Login';
import SignUp from './SignUp';
import './App.css';
import {useState, useEffect} from 'react';




function App() {
const [user, setUser]= useState(null)
const [isAuthenticated, setIsAuthenticated] = useState(false);
useEffect(() => {
  fetch('/me')
  .then((res) => {
    if (res.ok) {
      res.json()
      .then((user) => {
        setIsAuthenticated(true);
        setUser(user);
      });
    }
  });
 

},[]);
console.log(user)
  
  return (
    
    <Router>
      <Routes>
      <Route path= "/" element = {<Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} setUser={setUser}/>} />
      <Route path= "/home" element = {<Home setIsAuthenticated={setIsAuthenticated}
      isAuthenticated={isAuthenticated} user={user} setUser={setUser} /> } />
      <Route path= "/signup" element = {<SignUp setIsAuthenticated={setIsAuthenticated}
      setUser={setUser} isAuthenticated={isAuthenticated}/>} />
      </Routes>
      </Router>
    
  );
}


export default App;
