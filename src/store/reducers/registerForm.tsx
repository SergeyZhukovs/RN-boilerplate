import * as types from "../constants/registerForm";
import INITIAL_STATE from "../initialState/initialState";

export default (state = INITIAL_STATE, action: { type: string; data: any, id?: number }) => {
  switch (action.type) {
    case types.CHANGE_FORM_DATA:
      return { ...state, ...action.data };
    case types.REMOVE_AD_DATA: {
      const userAds = state.ads
      const indexAd = userAds.findIndex((element) => {
        return element.id === action.id;
      })
      userAds.slice(indexAd, 1);
      return { ...state, ads: userAds };
    }
    default:
      return state;
  }
};
