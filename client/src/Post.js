import React from 'react';
import "./Post.css"

function Post({posts}){

  return (
    <ul>
    {posts.map((post)=>(
            <div className="cards">
                <div className="cards2">
                    <img src ={post.img} /> 
                    <ul src ={post.caption} />
                    </div>
                </div>             
    ))}
    </ul>
  );
}

export default Post 


