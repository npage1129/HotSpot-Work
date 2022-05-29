import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from'./Login';
import SignUp from './SignUp';
import  Profile from './Profile';
import Add from './Add';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
const [user, setUser]= useState(null)
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [posts, setPosts] = useState([])
const[newPost, setNewPost] = useState([]);

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
 

useEffect(()=> {
    fetch('http://localhost:3000/posts', {
})
    .then((resp) => resp.json())
    .then((data) => setPosts(data));
}, []);
console.log(posts)
console.log(user)

function handleAddPost(newPosts) {
  const updatedPostsArray = [...newPost, newPosts];
  setNewPost(updatedPostsArray);
}

  
  return (
    
    <Router>
      <Routes>
      <Route path= "/" element = {<Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} setUser={setUser}/>} />
      <Route path= "/home" element = {<Home setIsAuthenticated={setIsAuthenticated}
      isAuthenticated={isAuthenticated} user={user} setUser={setUser} posts={posts} setPosts={setPosts} handleAddPost={handleAddPost}/> } />
      <Route path= "/signup" element = {<SignUp setIsAuthenticated={setIsAuthenticated}
      setUser={setUser} isAuthenticated={isAuthenticated}/>} />
      <Route path = "/profile" element={<Profile user={user} setUser={setUser} posts={posts} setPosts={setPosts}/>}/>
      <Route path= "/add" element={<Add setIsAuthenticated={setIsAuthenticated}
      isAuthenticated={isAuthenticated} user={user} setUser={setUser} posts={posts} setPosts={setPosts}/>}/>
      </Routes>
      </Router>
    
  );
}


export default App;
