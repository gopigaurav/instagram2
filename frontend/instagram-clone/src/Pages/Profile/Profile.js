import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SettingsIcon from "../../assets/images/icons8-settings.svg";
import ProfilIcon from "../../assets/images/icons8-user-location-16.png";
import GridIcon from "../../assets/images/icons8-grid-32.png";
import savedIcon from "../../assets/images/icons8-bookmark-24.png";
import MyPosts from "./MyPosts/MyPosts"
import MySaved from "./MySaved/MySaved"
import MyTaged from "./MyTaged/Mytaged"
import { useParams } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  const { id } = useParams();
  useEffect(() => {
  console.log(id);
  }, []);
  const [tabs, setTabs] = useState("posts")
  //const dispatch = useDispatch()
  const [mypics, setPics] = useState([]);
  const state = [];
  const [image, setImage] = useState("");
  useEffect(() => {
    /*fetch('/mypost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setPics(result.mypost)
       })*/
  }, []);
  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "insta-clone");
      data.append("cloud_name", "cnq");
      fetch("https://api.cloudinary.com/v1_1/cnq/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          fetch("/updatepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              pic: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              localStorage.setItem(
                "user",
                JSON.stringify({ ...state, pic: result.pic })
              );
              //dispatch({type:"UPDATEPIC",payload:result.pic})
              //window.location.reload()
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);
  const updatePhoto = (file) => {
    setImage(file);
  };
  return (
    <div style={{ width: "50%", margin: "0px auto" }}>
      <div
        style={{
          margin: "18px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            width: "70%",
            margin: "3em auto",
          }}
        >
          <div>
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                objectFit: "cover",
              }}
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
            />
          </div>
          <div className="pr__pic_ri">
            <div className="pr_pi_rt">
              <p className="pr_p_name">gopi gaurav</p>
              <div className="pr__pi_edpr">Edit Profile</div>
              <div className="pr__pic_rt_set">
                <img src={SettingsIcon}></img>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p className="">
                <span className="comm__text_bold">0</span> posts
              </p>
              <p className="">
                <span className="comm__text_bold">0</span> followers
              </p>
              <p className="">
                <span className="comm__text_bold">0</span> following
              </p>
            </div>
          </div>
        </div>

        {/*<div className="file-field input-field" style={{ margin: "10px" }}>
          <div className="btn #64b5f6 blue darken-1">
            <span>Update pic</span>
            <input
              type="file"
              onChange={(e) => updatePhoto(e.target.files[0])}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>*/}
      </div>
      {/*
      <div className="gallery">
        {mypics.map((item) => {
          return (
            <img 
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
      */}
      <div className="pr__bt">
        <div className="pr__alltabs">
          <div className="pr__tabs" onClick={() => setTabs("posts")}>
            <div>
              <img src={GridIcon} className="all_p_ac"/>
            </div>
            <p>POSTS</p>
          </div>
          <div className="pr__tabs" onClick={() => setTabs("saved")}>
            <div>
              <img src={savedIcon} className="all_p_ac"/>
            </div>
            <p>SAVED</p>
          </div>
          <div className="pr__tabs" onClick={() => setTabs("taged")}>
            <div>
              <img src={ProfilIcon} className="all_p_ac" />
            </div>
            <p>TAGED</p>
          </div>
        </div>
      </div>
      <div>
        {tabs === "posts" && <MyPosts />}
        {tabs === "saved" && <MySaved />}
        {tabs === "taged" && <MyTaged />}
      </div>
    </div>
  );
};

export default Profile;
