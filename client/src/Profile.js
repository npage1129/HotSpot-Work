import React,{useState} from 'react';
import Header from './Header';
import './Profile.css';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router'
import HomeIcon from '@mui/icons-material/Home';

function Profile({posts,user,}) {
    const [show, setShow]= useState('false')
  const navigate = useNavigate()
  function showButton(){
    setShow(!show)
  }
  const postIt =  posts.filter(post => post.user.id === user.id)
  console.log(posts)
  return (
    <div className="middle">
      <div className="home">
      <HomeIcon onClick={()=>{navigate('/home')}}/>
      <AddIcon  onClick={()=>{navigate('/add')}}/>
  </div>
<br></br>
<br></br>
<br></br>
<br></br>

    {postIt.map((posts)=>(
            <div className="container">
              <div className="header" >
              {posts.user.username}
             
              </div>
           
                  <div>
                    <img className = "post_image" src ={posts.img} key = {posts.id}/> 
                    <div className = "captions">
                    {posts.caption} 
                    </div>
                    {show? (posts.comments.map((comment)=>
                    <div className="comments">
                {comment.username}: {comment.comment} 
                  </div>
                  )) : null}
                          <button className="comments_section" onClick={showButton}>{show?"Hide Comments":"Show Comments"}</button>
                         
                    </div>
                </div> 
               
))}
    </div>
  )
}

export default Profile