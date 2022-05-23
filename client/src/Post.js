import React from 'react';
import "./Post.css"

function Post({posts}){

  return (
    <div className="middle">
    {posts.map((post)=>(
            <div className="container">
              <div classNam="header">
                {post.user.username}
                </div>
                  <div>
                    <img className = "post_image" src ={post.post.img} key = {post.id}  /> 
                    <div className = "captions">
                    {post.post.caption} 
                    </div>
                    <div className = "username">
                     {post.user.username}: {post.comment}
                </div>
                </div>  
                </div>  
    ))}
    </div>
  );
}

export default Post 


