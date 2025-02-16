export const setUserName = (username) => {
  return {
    type: "SET_USERNAME",
    username: username,
  };
};

export const getUserNAME = () => {
  return {
    type: "GET_USERNAME",
  };
};
export const setUsernameNull = () => {
  return {
    type: "SET_USERNAME_NULL",
    token: null,
  };
};
