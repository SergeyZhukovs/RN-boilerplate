import * as types from "../constants/createdAd";
import INITIAL_STATE from "../initialState/initialState";

export default (state = INITIAL_STATE, action: { type: string; data: any; index: number }) => {
  switch (action.type) {
    case types.SET_CREATED_AD:
      return { ...state, createFormData: {...state.createFormData, ...action.data} };
    case types.SET_IMAGES_DATA:
      return {
        ...state,
        createFormData: {...state.createFormData, createdAdImages: [...state.createFormData.createdAdImages, action.data]},
      };
    case types.REMOVE_IMAGES_DATA: {
      const createdAdImages = [...state.createFormData.createdAdImages];
      createdAdImages.splice(action.index, 1);
      return {
        ...state,
        createFormData: {...state.createFormData, createdAdImages},
      };
    }

    default:
      return state;
  }
};
