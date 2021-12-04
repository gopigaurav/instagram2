import axios from "../../axios";
const token = JSON.parse(localStorage.getItem("token"));
const headers = {
  "Content-Type": "application/json",
};
export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/allpost", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (res.status === 200) {
      dispatch({ type: "FETCHED_ALL_POSTS", payload: res.data.posts });
    }
  } catch (err) {
    console.log(err);
  }
};
export const createPost = (title, body, url, history) => async (dispatch) => {
  try {
    console.log(title, body, url);
    const res = await axios.post(
      "/createpost",
      JSON.stringify({
        title,
        body,
        pic: url,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status === 200) {
      history("/");
    }
  } catch (err) {
    console.log(err);
  }
};
export const getMyPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/mypost", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (res.status === 200) {
      dispatch({ type: "FETCHED_MY_POSTS", payload: res.data.mypost });
    }
  } catch (err) {
    console.log(err);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      "/like",
      JSON.stringify({
        postId: id,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: "UPDATE_ACTIONS", payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
export const unlikePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      "/unlike",
      JSON.stringify({
        postId: id,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: "UPDATE_ACTIONS", payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
export const deletePost = (postid) => async (dispatch) => {
  try {
    const res = await axios.delete(`/deletepost/${postid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    dispatch({ type: "UPDATE_ACTION_DELETE", payload: res.data });
    dispatch({ type: "OPEN_ACTIONS", payload: false });
  } catch (err) {
    console.log(err);
  }
};
export const makeComment = (text, postId) => async (dispatch) => {
  try {
    const res = await axios.put(
      "/comment",
      JSON.stringify({
        postId,
        text,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: "UPDATE_ACTIONS", payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
export const getUserProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (res.status === 200) {
      dispatch({ type: "USER__PROFILE", payload: res.data });
    }
  } catch (err) {
    alert(err);
  }
};
export const followUsers = (userid) => async (dispatch) => {
  console.log(userid, token)
  try {
    const res = await axios.put(
      "/follow",
      JSON.stringify({
        followId: userid,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status === 200) {
      //dispatch({ type: "USER__PROFILE", payload: res.data });
      //console.log(res.data)
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  } catch (err) {
    alert(err);
  }
      /*dispatch({
        type: "UPDATE",
        payload: { following: data.following, followers: data.followers },
      });
      localStorage.setItem("user", JSON.stringify(data));
      setProfile((prevState) => {
        return {
          ...prevState,
          user: {
            ...prevState.user,
            followers: [...prevState.user.followers, data._id],
          },
        };
      });
      setShowFollow(false);
    });*/
};
export const unFollowUsers = (userid) => async (dispatch) => {
  try {
    const res = await axios.put(
      "/unfollow",
      JSON.stringify({
        unfollowId: userid,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status === 200) {
      //dispatch({ type: "USER__PROFILE", payload: res.data });
      console.log(res.data)
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  } catch (err) {
    alert(err);
  }
  /*
      dispatch({
        type: "UPDATE",
        payload: { following: data.following, followers: data.followers },
      });
      localStorage.setItem("user", JSON.stringify(data));
      setProfile((prevState) => {
        const newFollower = prevState.user.followers.filter(
          (item) => item != data._id
        );
        return {
          ...prevState,
          user: {
            ...prevState.user,
            followers: newFollower,
          },
        };
      });
      setShowFollow(true);
    });*/
};
