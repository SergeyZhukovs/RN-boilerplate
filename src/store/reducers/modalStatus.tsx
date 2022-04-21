import * as types from "../constants/modalStatus";
import INITIAL_STATE from "../initialState/initialState";

export default (
  state = INITIAL_STATE,
  action: { type: string; value?: string; show?: boolean }
) => {
  switch (action.type) {
    case types.SET_MESSAGE:
      return { ...state, message: action.value };
    case types.SET_STATUS:
      return { ...state, status: action.value };
    case types.SET_VISIBILITY:
      return { ...state, show: action.show };
    default:
      return state;
  }
};
