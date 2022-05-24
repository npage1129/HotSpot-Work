import React, {useState, useEffect} from 'react'
import Post from './Post'
import './MainContent.css'

const MainContent = ({posts, user}) => {
  const [avatar, setAvatar] = useState([])

    useEffect(()=> {
        fetch('/users', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setAvatar(data))
    },[])

  return (
    <div>
        <div className="Nav">
          <Post posts={posts} user={user} avatar={avatar}/>
        </div>
    </div>
  )
}
export default MainContent