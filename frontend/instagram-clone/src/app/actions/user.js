import axios from "../../axios";
import { getAllPosts } from "./post";
const headers = {
  "Content-Type": "application/json",
};
export const signUp = (data, history) => async (dispatch) => {
  try {
    console.log(data);
    const res = await axios.post("/signup", data, {
      headers: headers,
    });
    if (res.status === 200) {
      history("/signin");
    }
  } catch (err) {
    console.log(err);
  }
};
export const signIn = (data, history) => async (dispatch) => {
  try {
    console.log(data);
    const res = await axios.post("/signin", data, {
      headers: headers,
    });
    if (res.status === 200) {
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch(getAllPosts())
      history("/");
    }
  } catch (err) {
    console.log(err);
  }
};