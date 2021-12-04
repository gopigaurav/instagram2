import React from "react";
import "./Actions.css";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../app/actions/post";
function Actions() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.userAction.post);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div className="actions__container">
      <div>
        <div className="actions__acts">
          <p>Report</p>
        </div>
        <hr />
        <div className="actions__acts">
          <p>Unfollow</p>
        </div>
        <hr />
        <div className="actions__acts">
          <p>Go to post</p>
        </div>
        <hr />
        <div className="actions__acts">
          <p>Share to...</p>
        </div>
        <hr />
        {post.postedById == user._id && (
          <div className="actions__acts" onClick={() => dispatch(deletePost(post.postId))}>
            <p>delete</p>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
}

export default Actions;
