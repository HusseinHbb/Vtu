export const setAuthToken = (token) => {
  return {
    type: "SET_TOKEN",
    token: token,
  };
};

export const setTokenNull = () => {
  return {
    type: "SET_TOKEN_NULL",
    token: null,
  };
};
