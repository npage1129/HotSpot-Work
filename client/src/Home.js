import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';



const Home = ({user, setUser, setIsAuthenticated, isAuthenticated}) => {
    const [posts, setPosts] = useState([])
 

    useEffect(()=> {
        fetch('/posts', {
    })
        .then((resp) => resp.json())
        .then((data) => setPosts(data));
    }, []);
    console.log(posts)

return (
    
    <div>
    <Header posts={posts} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}  />
    <MainContent posts={posts} />
    </div>
)
}

export default Home;