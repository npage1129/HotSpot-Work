import React, {useState, useEffect} from 'react'
import Post from './Post'
import './MainContent.css'

const MainContent = ({user, setUser, posts, setIsAuthenticated, handleAddPost}) => {
 
  return (
    <div>
        <div className="Nav">
          <Post handleAddPost={handleAddPost} posts={posts} user={user} setUser ={setUser}/>
        </div>
    </div>
  )
}
export default MainContent