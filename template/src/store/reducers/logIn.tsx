import * as types from "../constants/logIn";
import INITIAL_STATE from "../initialState/initialState";

export default (state = INITIAL_STATE, action: { type: string; data: any }) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, token: action.data };
    case types.SET_BUSINESS:
      return { ...state, isBusiness: action.data };
    case types.SET_FORM:
      return { ...state, logInForm: action.data };
    case types.SET_USER_ID:
      return { ...state, userId: action.data };
    case types.SET_LANG:
      return { ...state, lang: action.data };
      case types.SET_LOGIN_METHOD:
        return { ...state, social: action.data };
        case types.SET_FORGOT_PASS_EMAIL:
          return { ...state, forgotPassEmail: action.data };
    default:
      return state;
  }
};
