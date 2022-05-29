import React, {useState} from 'react'

function Add({posts, user, setPosts, setUsers, handleAddPost}){
    const [img, setImg] = useState('')
    const  [caption, setCaption] =useState('')
    const [posted, setPosted] = useState([])

    function handleSubmit(e) {
      e.preventDefault();

      fetch("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: img,
          caption: caption,
        }),
      })
        .then((r) => r.json())
        .then((newPost) => console.log(newPost));
    }

  return (
    <>
    <h1>Add Post</h1>
    <form onSubmit={handleSubmit}>
   
    <label>
     Image

    <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
    </label>
    <label>
  Caption

    <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
    </label>
    <button>Post!</button>
  </form>
  </>
            
  )}
export default Add