import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authTokenReducer from "./tokenReducer";
// import rawTokenReducer from "./rawTokenReducer";

const myReducers = combineReducers({
  user: userReducer,
  validatedToken: authTokenReducer,
  // rawToken: rawTokenReducer,
});
export default myReducers;
