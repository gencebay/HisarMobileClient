import { LOGIN_USER_SUCCESS } from "../../Build/Actions";

const initialAuthState = { isLoggedIn: false };

export function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      const currentState = { ...state, isLoggedIn: true };
      return currentState;
    case "Logout":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
