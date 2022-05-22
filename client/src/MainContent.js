import React from 'react'
import Post from './Post'
import './MainContent.css'

const MainContent = ({posts}) => {
  return (
    <div>
        <div className="Nav">
          <Post posts={posts}/>
        </div>
    </div>
  )
}
export default MainContent