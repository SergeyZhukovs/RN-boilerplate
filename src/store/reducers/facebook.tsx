import * as types from "../constants/facebook";
import INITIAL_STATE from "../initialState/initialState";

export default (
  state = INITIAL_STATE,
  action: { type: string; data: any; index: number }
) => {
  switch (action.type) {
    case types.SET_IS_LOGGED_IN:
      return { ...state, facebookIsLoggedIn: action.data };
    case types.SET_PROFILE:
      return { ...state, facebookProfile: action.data };
    default:
      return state;
  }
};
