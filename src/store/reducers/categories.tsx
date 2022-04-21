import * as types from "../constants/categories";
import INITIAL_STATE from "../initialState/initialState";

export default (state = INITIAL_STATE, action: { type: string; data: [] }) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return { ...state, categoriesData: action.data };
    case types.SET_CATEGORIES_COLORS:
      return { ...state, colors: action.data };
    default:
      return state;
  }
};
