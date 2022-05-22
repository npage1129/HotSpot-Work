import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';



const Home = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/posts', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setPosts(data))
    },[]) 
    useEffect(()=> {
        fetch('http://localhost:3000/', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setPosts(data))
    },[]) 
return (
    <div>
    <Header/>
    <MainContent posts={posts} />
    </div>
)
}

export default Home;