import React, {useState, useEffect} from 'react'
import Post from './Post'
import './MainContent.css'

const MainContent = ({user, setUser, posts, setIsAuthenticated, isAuthenticated, handleAddPost}) => {
 
  return (
    <div>
        <div className="Nav">
          <Post  isAuthenticated={isAuthenticated} handleAddPost={handleAddPost} setIsAuthenticated={setIsAuthenticated} posts={posts} user={user} setUser ={setUser}/>
        </div>
    </div>
  )
}
export default MainContent