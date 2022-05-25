import React, {useState, useEffect} from 'react'
import Post from './Post'
import './MainContent.css'

const MainContent = ({posts, setUser}) => {
  
  return (
    <div>
        <div className="Nav">
          <Post posts={posts} setUser ={setUser}/>
        </div>
    </div>
  )
}
export default MainContent