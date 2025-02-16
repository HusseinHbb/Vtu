import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authTokenReducer from "./tokenReducer";
import usernameReducer from "./usernameReducer";
// import rawTokenReducer from "./rawTokenReducer";

const myReducers = combineReducers({
  user: userReducer,
  validatedToken: authTokenReducer,
  username: usernameReducer,
  // rawToken: rawTokenReducer,
});
export default myReducers;
