import React, { useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import { createPost } from "../../app/actions/post";
import {useDispatch} from "react-redux"
import "./CreatePost.css";
function CreatePost() {
  const dispatch = useDispatch()
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(()=>{
    if(url){
      dispatch(createPost(title, body, url, history))
    }
  },[url])
  const postDetails = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
    fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="createPostDiv">
      <form onSubmit={postDetails}>
        <label for="fname">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          className="crePostIp"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label for="lname">Body</label>
        <input
          type="text"
          id="body"
          name="body"
          placeholder="body"
          className="crePostIp"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="file"
          id="myFile"
          name="filename"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit" className="cpbtn">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
