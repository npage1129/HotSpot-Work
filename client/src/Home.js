import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';



const Home = () => {
    const [posts, setPosts] = useState([])


    useEffect(()=> {
        fetch('http://localhost:3000/posts', {
        
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