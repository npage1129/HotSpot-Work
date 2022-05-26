import React, {useState} from 'react'

function Add({posts, user, setPosts, setUsers}){
    const [image, setImage] = useState('')
    const  [caption, setCaption] =useState('')
    const [posted, setPosted] = useState([{}])
   


  return (
    <>
    <h1>Add Post</h1>
    <form >
   
    <label>
     Image

    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
    </label>
    <label>
  Caption

    <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
    </label>
    <button onClick={(e)=>{
                          const newObj =  {
                            image,
                            caption,
                            username: user.username,
                          }
                          const postSet = {
                            method:'POST',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(newObj)}
                            fetch('/posts', postSet)
                            .then(response => response.json())
                            .then((data)=> console.log([...posted, data]))
                          }}
         
            >Post!</button>
  </form>
  </>
            
  )
}
export default Add