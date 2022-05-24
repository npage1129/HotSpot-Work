import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';



const Home = ({user}) => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('/posts', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setPosts(data))
    },[])
return (
    <div>
    <Header posts={posts} user={user}/>
    <MainContent posts={posts} user={user} />
    </div>
)
}

export default Home;