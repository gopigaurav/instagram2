import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Profile from "./Pages/Profile/Profile";
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
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/profile/:id" element={<Profile />}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
