import React,{useState} from 'react'
import './Add.css';

function Add ({posts, user}){
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [posteds, setPosteds] = useState([])
console.log(user)
  function handleSubmit(e) {
    function handleAddPost(newPosts) {
      const updatedPostsArray = [...posteds, newPosts];
      setPosteds(updatedPostsArray);
    }
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        event_id: 1,
        img: image,
        caption: caption,
      }),
    })
      .then((r) => r.json())
      .then((data) => handleAddPost(data));
  }
  return (
    <div className="Add_Post">
    <h2>Add Post</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        name="caption"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  </div>
);
}

  


export default Add