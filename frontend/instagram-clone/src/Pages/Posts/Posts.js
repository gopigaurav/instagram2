import { useState, useEffect } from "react";
import MoreVertIcon from "../../assets/images/icons8-more-24.png";
import sendIcon from "../../assets/images/icons8-send-64.png";
import FavIcon from "../../assets/images/icons8-heart-2.png";
import FavFilledIcon from "../../assets/images/icons8-heart-24.png";
import CommentIcon from "../../assets/images/icons8-topic-50.png";
import bookmarkIcon from "../../assets/images/icons8-bookmark-24.png";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import {
  getAllPosts,
  likePost,
  unlikePost,
  makeComment,
} from "../../app/actions/post";
function Posts() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const allPosts = useSelector((state) => state.postAction.allPosts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  const handleDelete = (postedById, postId) => {
    const id = { postedById, postId };
    dispatch({ type: "POSTEDBY_ID", payload: id });
    dispatch({ type: "OPEN_ACTIONS", payload: true });
  };
  return (
    <>
      {allPosts.map((post, index) => (
        <div className="posts__div" key={index}>
          <div>
            <div className="post__top">
              <div className="post__top_left">
                <div
                  className="home_img_pic"
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "2px solid #EA5951",
                  }}
                >
                  <img src={post.postedBy.pic}></img>
                </div>
                <Link
                  to={
                    post.postedBy._id !== user._id
                      ? "/profile/" + post.postedBy._id
                      : "/profile"
                  }
                >
                  <p className="adm__name">{post.postedBy.name}</p>
                </Link>
              </div>
              <div
                onClick={() => handleDelete(post.postedBy._id, post._id)}
                style={{ cursor: "pointer" }}
              >
                <img src={MoreVertIcon}></img>
              </div>
            </div>
            <div>
              <div className="posts_main_pt">
                <img src={post.photo} />
              </div>
            </div>
            <div>
              <div className="psts__actns">
                <div className="psts__actns_l">
                  {post.likes.includes(user._id) ? (
                    <div className="psts__actns_lac">
                      <img
                        src={FavFilledIcon}
                        onClick={() => dispatch(unlikePost(post._id))}
                      />
                    </div>
                  ) : (
                    <div
                      className="psts__actns_lac"
                      onClick={(e) => {
                        dispatch(likePost(post._id));
                      }}
                    >
                      <img src={FavIcon} />
                    </div>
                  )}
                  <div className="psts__actns_lac">
                    <img src={CommentIcon} />
                  </div>
                  <div className="psts__actns_lac">
                    <img src={sendIcon} />
                  </div>
                </div>
                <div>
                  <img src={bookmarkIcon} />
                </div>
              </div>
              <div className="psts__actns_lks">
                <p>{post.likes.length} likes</p>
              </div>
              <div className="psts_atn_dp">
                {/* description */}
                <p className="pt_des">
                  <span className="pts__atn_des">{post.postedBy.name}</span>{" "}
                  {post.title}
                </p>
                <p className="pt_des">{post.body}</p>
              </div>
              <div className="pt_view_com">
                <p className="pt_view_com_ettx">View all Comments</p>
              </div>
              <div className="psts_atn_dp">
                {post.comments.map((record) => {
                  return (
                    <p key={record._id} className="pt_des">
                      <span className="pts__atn_des">
                        {record.postedBy.name}
                      </span>{" "}
                      {record.text}
                    </p>
                  );
                })}
              </div>
              <hr style={{ opacity: "0.1", margin: "0.8em 0" }} />
              <div className="pts__comment">
                <div>
                  <img />
                </div>
                <div className="pts__inputF">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <div onClick={() => dispatch(makeComment(comment, post._id))}>
                  <p className="pro_info_switch_acc">Post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
