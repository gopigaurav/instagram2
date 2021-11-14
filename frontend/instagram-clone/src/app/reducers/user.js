const initialstate = {
  showLoading: false,
  openInstaStories: true,
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
    default:
      return state;
  }
};

export default UserReducer;
