const initialstate = {
  showLoading: false,
  openInstaStories: false,
  openActions: false,
  post: {},
};

const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        showLoading: action.payload,
      };
    case "OPEN_INSTASTORIES":
      return { ...state, openInstaStories: action.payload };
    case "OPEN_ACTIONS":
      return { ...state, openActions: action.payload };
    case "POSTEDBY_ID":
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
