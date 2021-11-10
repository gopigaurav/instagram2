import React from "react";
import "./Followers.css";
function Followers() {
  return (
    <div className="followers__c">
      <div className="h_c__r__r">
        <div className="hc_r">
          <div
            className="home_img_pic"
            style={{ width: "35px", height: "35px" }}
          >
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
          </div>
          <div>
            <p className="pro_info frst_text">gopi gaurav</p>
            <p className="pro_info scd_text">New to instagram</p>
          </div>
        </div>
        <div>
          <p className="pro_info_switch_acc">Follow</p>
        </div>
      </div>
    </div>
  );
}

export default Followers;
