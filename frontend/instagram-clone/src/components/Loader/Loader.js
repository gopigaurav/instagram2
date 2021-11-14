import React from "react";
import "./Loader.css"
function Loader() {
  return (
    <div className="loader_overlay">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
