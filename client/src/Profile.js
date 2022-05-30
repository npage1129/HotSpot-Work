import React,{useState} from 'react';
import Header from './Header';
import Add from './Add';
import './Profile.css';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router'
import HomeIcon from '@mui/icons-material/Home';

function Profile({posts,user}) {

    const [show, setShow]= useState('false')
    const [userCaption, setUserCaption] = useState([]);
    const [updatedCaption, setUpdatedCaption] = useState("");
    const [id, setId] = useState(0)
  const navigate = useNavigate()
  function showButton(){
    setShow(!show)
  }
  function handleUpdateCaption(updatedCaption) {
    const updatedPostsArray = userCaption.map((capt) => {
      if (capt.id === updatedCaption.id) {
        return updatedCaption;
      } else {
        return capt;
      }
    });
   setUserCaption(updatedPostsArray);
  }
  function handlePriceFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedCaption }),
    })
      .then((r) => r.json())
      .then((updatedCaption) => {
        handleUpdateCaption(updatedCaption);
      });
  }
 
  const postIt =  posts.filter(post => post.user.id === user.id)
  console.log(posts)
  return (
    <div className="middle">
      <Add/>
      <div className="home">  
      <HomeIcon onClick={()=>{navigate('/home')}}/>
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
                    {posts.caption} <input placeholder ="Update Caption" value={updatedCaption} 
                    onChange={(e)=> setUpdatedCaption(e.target.value)}></input>
              
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