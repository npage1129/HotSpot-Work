import React from 'react';
import "./Post.css"

function Post({posts}){

  return (
    <ul>
    {posts.map((post)=>(
            <div className="container">
                <div className="header">
                  <div className ="post_image">
                    <img src ={post.img} key = {post.id}  /> 
                    <div className = "captions">
                    {post.caption} 
                    </div>
                </div>
                </div>    
                </div>         
    ))}
    </ul>
  );
}

export default Post 


