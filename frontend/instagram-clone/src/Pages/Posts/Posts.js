import { useEffect} from "react";
import MoreVertIcon from "../../assets/images/icons8-more-24.png";
import sendIcon from "../../assets/images/icons8-send-64.png";
import FavIcon from "../../assets/images/icons8-heart-24.png";
import CommentIcon from "../../assets/images/icons8-topic-50.png";
import bookmarkIcon from "../../assets/images/icons8-bookmark-24.png";
import "./Posts.css";

function Posts() {
  return (
    <div className="posts__div">
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
              <img src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"></img>
            </div>
            <p className="adm__name">gopi</p>
          </div>
          <div>
            <img src={MoreVertIcon}></img>
          </div>
        </div>
        <div>
          <div className="posts_main_pt">
            <img src="https://images.unsplash.com/photo-1608280711089-3be7c17fe376?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80" />
          </div>
        </div>
        <div>
          <div className="psts__actns">
            <div className="psts__actns_l">
              <div className="psts__actns_lac">
                <img src={FavIcon} />
              </div>
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
            <p>2,078 likes</p>
          </div>
          <div className="psts_atn_dp">
            {/* description */}
            <p className="pt_des">
              <span className="pts__atn_des">gopi</span> Wanted to become a
              successful Python Developer with average Rs. 4-14 LPA Salary
            </p>
          </div>
          <div>{/* Comments */}</div>
          <hr style={{ opacity: "0.3" }} />
          <div className="pts__comment">
            <div>
              <img />
            </div>
            <div className="pts__inputF">
              <input type="text" placeholder="Add a comment..." />
            </div>
            <div>
              <p className="pro_info_switch_acc">Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
