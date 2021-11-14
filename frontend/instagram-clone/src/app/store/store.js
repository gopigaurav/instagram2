import { createStore, applyMiddleware, combineReducers } from "redux";
import user from "../reducers/user";
import post from "../reducers/post";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const reducers = combineReducers({ userAction: user, postAction: post });

const store = createStore(reducers, composedEnhancer);

export default store;
