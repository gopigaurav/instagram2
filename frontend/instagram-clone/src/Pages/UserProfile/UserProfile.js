import React, { useEffect, useState } from "react";
import {
  getUserProfile,
  followUsers,
  unFollowUsers,
} from "../../app/actions/post";
import SettingsIcon from "../../assets/images/icons8-settings.svg";
import ProfilIcon from "../../assets/images/icons8-user-location-16.png";
import GridIcon from "../../assets/images/icons8-grid-32.png";
import savedIcon from "../../assets/images/icons8-bookmark-24.png";
import OtherProPost from "./OtherProPost/OtherProPost";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfile.css";
const MySaved = () => {
  return <>My Saved</>;
};
const MyTaged = () => {
  return <>My Tagged</>;
};
const Profile = () => {
  const { userid } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.following.includes(userid))
  const userProfileInfo = useSelector(
    (state) => state.postAction.userProfileInfo
  );
  const [showfollow, setShowFollow] = useState(
    user?.following.includes(userid) ? true : false
  );
  const dispatch = useDispatch();
  const myPosts = useSelector((state) => state.postAction.myPosts);
  const [tabs, setTabs] = useState("posts");
  useEffect(() => {
    dispatch(getUserProfile(userid));
  }, []);
  return (
    <>
      {userProfileInfo ? (
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
                  src={userProfileInfo?.user?.pic}
                />
              </div>
              <div className="pr__pic_ri">
                <div className="pr_pi_rt">
                  <p className="pr_p_name">{userProfileInfo?.user?.name}</p>
                  {!showfollow ? (
                    <button
                      style={{
                        margin: "10px",
                      }}
                      className="btn_follow"
                      onClick={() => dispatch(followUsers(userid))}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      style={{
                        margin: "10px",
                      }}
                      className="btn_follow"
                      onClick={() => dispatch(unFollowUsers(userid))}
                    >
                      UnFollow
                    </button>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p className="">
                    <span className="comm__text_bold">
                      {userProfileInfo?.posts?.length}
                    </span>{" "}
                    posts
                  </p>
                  <p className="">
                    <span className="comm__text_bold">
                      {userProfileInfo?.user?.followers.length}
                    </span>{" "}
                    followers
                  </p>
                  <p className="">
                    <span className="comm__text_bold">
                      {userProfileInfo?.user?.following.length}
                    </span>{" "}
                    following
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pr__bt">
            <div className="pr__alltabs">
              <div className="pr__tabs" onClick={() => setTabs("posts")}>
                <div>
                  <img src={GridIcon} className="all_p_ac" />
                </div>
                <p>POSTS</p>
              </div>
              <div className="pr__tabs" onClick={() => setTabs("saved")}>
                <div>
                  <img src={savedIcon} className="all_p_ac" />
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
            {tabs === "posts" && (
              <OtherProPost myPosts={userProfileInfo.posts} />
            )}
            {tabs === "saved" && <MySaved />}
            {tabs === "taged" && <MyTaged />}
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Profile;
