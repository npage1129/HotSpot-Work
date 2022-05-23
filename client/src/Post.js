import React from 'react';
import "./Post.css"

function Post({posts}){

  return (
    <div className="middle">
    {posts.map((post)=>(
            <div className="container">
                  <div>
                    <img className = "post_image" src ={post.img} key = {post.id}  /> 
                    <div className = "captions">
                    {post.caption} 
                    </div>
                </div>  
                </div>  
    ))}
    </div>
  );
}

export default Post 


