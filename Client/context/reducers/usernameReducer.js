const usernameReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return state;

    case "SET_USERNAME":
      return action.username;

    default:
      return state;

    case "SET_USERNAME_NULL":
      return {
        ...state,
        username: null,
      };
  }
};

export default usernameReducer;
