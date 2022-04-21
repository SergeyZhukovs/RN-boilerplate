import * as types from '../constants/categories';

export const setCategories = (data: any) => ({
  type: types.SET_CATEGORIES,
  data,
});

export const setCategoriesColors = (data: any) => ({
  type: types.SET_CATEGORIES_COLORS,
  data,
});


