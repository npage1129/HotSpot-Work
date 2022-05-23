import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';



const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('/posts', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setPosts(data))
    },[])
return (
    <div>
    <Header posts={posts}/>
    <MainContent posts={posts} />
    </div>
)
}

export default Home;