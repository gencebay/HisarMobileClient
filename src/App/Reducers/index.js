import { combineReducers } from "redux";
import MainReducer from "../../Build/Reducers/MainReducer";
import UserReducer from "../../Build/Reducers/UserReducer";
import { auth } from "./AuthenticationReducer";

export default combineReducers({
  main: MainReducer,
  user: UserReducer,
  auth
});
