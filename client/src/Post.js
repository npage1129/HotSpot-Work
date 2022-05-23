import React, {useEffect, useState} from 'react';
import "./Post.css"

function Post({posts}){
  const [show, setShow]= useState('false')
  
  return (
    <div className="middle">
    {posts.map((post)=>(
            <div className="container">
              <div className="header" >
              {post.user.username}
              </div>
                
                  <div>
                    <img className = "post_image" src ={post.img} key = {post.id}  /> 
                    <div className = "captions">
                    {post.caption} 
                  
                    </div>
                
                  {post.comments.map((comment)=>
                     <div className="comments">
        
                    {comment.username}: {comment.comment}
        
                  </div>
                  
                  )}
                
                    </div>
                </div> 
    ))}
    </div>
  );
}

export default Post 


