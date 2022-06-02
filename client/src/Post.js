import React, {useState} from 'react';
import Add from './Add';
import "./Post.css"


function Post({posts, user, handleAddPost, isAuthenticated}){
  const [show, setShow]= useState('false')
  const [comment, setComment] = useState('')
  const [liked, setLiked] = useState('false');
  
  function showButton(){
    setShow(!show)
  }


  return (
    <div className="middle">
      <Add user={user}/>
  {posts.map((post)=>(
            <div className="container">
              <div className="header" >
              {post.user.username}
              </div>
                
                  <div>
                    <img className = "post_image" src ={post.img} key = {post.id}/> 
                    <div className = "captions">
                    {post.caption} 
              
                    </div>

                    {show? (post.comments.map((comment)=>
                    <div className="comments">
      
                 {comment.username}: {comment.comment} 
                
                  </div>
                 
                  )) : null}
                          <button className="comments_section" onClick={showButton}>{show?"Hide Comments":"Show Comments"}</button>
                    </div>
                    <input type="text" placeholder="comment" onChange={(event) => setComment(event.target.value)}></input>
                    <button className="Add" onClick={(e)=>{
                          const newObj =  {
                            user_id: user.id,
                            post_id: post.id,
                            comment,
                            username: user.username,
                          }
                          const postSet = {
                            method:'POST',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(newObj)}
                            fetch('/comments', postSet)
                            .then(response => response.json())
                            .then((data)=> setComment([...comment, data]))
                          }}
                          >Add Comment</button>
                </div> 
))}
    </div>
  );
}

export default Post;


