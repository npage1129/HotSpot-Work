import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';



const Home = ({user, handleAddPost, setUser, setIsAuthenticated, isAuthenticated, posts, setPosts}) => {


return (
    
    <div>
    <Header posts={posts} setPosts={setPosts} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}  />
    <MainContent isAuthenticated={isAuthenticated} posts={posts} setPosts={setPosts} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated}  handleAddPost={handleAddPost}/>
    </div>
)
}

export default Home;