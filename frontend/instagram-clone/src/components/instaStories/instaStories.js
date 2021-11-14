//import "./styles.css";

import React, { useEffect } from "react";
import Stories, { WithSeeMore } from "react-insta-stories";
import "./instaStories.css";
function InstaStories() {
  return (
    <div className="instapp">
      <div className="stories">
        <Stories
          loop
          keyboardNavigation
          defaultInterval={3000}
          stories={stories2}
          onStoryEnd={(s, st) => console.log("story ended", s, st )}
          onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
          onStoryStart={(s, st) => console.log("story started", s, st)}
          width="inherit"
          height="inherit"
          
        />
      </div>
    </div>
  );
}

const stories2 = [
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
          <h1>Hey All 👋</h1>
          <h1>Check shivam's journey story.</h1>

          {/* <pre>
            <code style={code}>here they are 😄 -></code>
          </pre> */}
          <img
            style={image}
            src="https://i.ibb.co/fY1DmQW/8aacdef9ba37db60c7a96271877cfbb5.jpg"
          ></img>
          <h4>stories creted by Cubestop travel app</h4>
        </div>
      );
    },
  },
  {
    content: ({ action, story }) => {
      return (
        <WithSeeMore story={story} action={action}>
          <div style={{ background: "pink", padding: 20 }}>
            <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
            <h1 style={{ marginTop: 5 }}>
              Here is the location journey story created for the shivam's
              journey.
            </h1>
          </div>
        </WithSeeMore>
      );
    },
    seeMoreCollapsed: ({ toggleMore, action }) => (
      <p style={customSeeMore} onClick={() => toggleMore(true)}>
        A custom See More message →
      </p>
    ),
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
    duration: 1000,
  },
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStylestoryback}>
          <img style={image} src="https://i.ibb.co/MGbfDTH/Group-13.png"></img>
        </div>
      );
    },
  },
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const contentStylestoryback = {
  background: "black",
  width: "100%",
  color: "white",
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  color: "white",
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
};

export default InstaStories;
