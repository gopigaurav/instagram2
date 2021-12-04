const initialstate = {
  allPosts: [],
  myPosts: [],
  userProfileInfo: {},
};

const PostReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "FETCHED_ALL_POSTS":
      return {
        ...state,
        allPosts: action.payload,
      };
    case "FETCHED_MY_POSTS":
      return {
        ...state,
        myPosts: action.payload,
      };
    case "USER__PROFILE":
      return {
        ...state,
        userProfileInfo: action.payload,
      };
    case "UPDATE_ACTIONS": {
      const newData = state.allPosts.map((item) => {
        if (item._id == action.payload._id) return action.payload;
        else return item;
      });
      return {
        ...state,
        allPosts: newData,
      };
    }
    case "UPDATE_ACTION_DELETE": {
      const newData = state.allPosts.filter((item) => {
        return item._id !== action.payload._id;
      });
      return {
        ...state,
        allPosts: newData,
      };
    }
    default:
      return state;
  }
};

export default PostReducer;
