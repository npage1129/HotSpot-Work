import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';



const Home = ({user, setUser, setIsAuthenticated, isAuthenticated, posts, setPosts}) => {


return (
    
    <div>
    <Header posts={posts} setPosts={setPosts} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}  />
    <MainContent posts={posts} setPosts={setPosts} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
    </div>
)
}

export default Home;