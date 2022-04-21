import * as types from "../constants/createdAd";

export const setCreatedAd = (data: any) => {
  return {
    type: types.SET_CREATED_AD,
    data,
  };
};

export const setImagesData = (data: { type: string; content: string }) => ({
  type: types.SET_IMAGES_DATA,
  data,
});

export const removeImageByIndex = (index: number) => ({
  type: types.REMOVE_IMAGES_DATA,
  index,
});
