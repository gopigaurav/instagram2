import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import CreatePost from "./Pages/CreatePost/CreatePost";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Profile from "./Pages/Profile/Profile";
import Loader from "./components/Loader/Loader";
import { useSelector} from "react-redux";
import InstaSlider from "./components/Popupslider/Popupslider"
import Modal from "./components/Modal/Modal"
/* <Route
  path='/dashboard'
  render={(props) => (
    <Dashboard {...props} isAuthed={true} />
  )}
/>
<Route
  path='/dashboard'
  component={() => <Dashboard isAuthed={true} />}
/>
 */
function App() {
  const showLoading = useSelector((state) => state.userAction.showLoading);
  const openInstaStories = useSelector((state) => state.userAction.openInstaStories);
  return (
    <div className="App">
      <Router>
      {openInstaStories && (
        <Modal actionType={"OPEN_INSTASTORIES"}>
          <InstaSlider/>
        </Modal>
      )}
        <Navbar />
        {showLoading && <Loader />}
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/create" element={<CreatePost />}></Route>
          <Route path="/profile/:userid" element={<UserProfile />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
