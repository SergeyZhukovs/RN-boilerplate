import * as types from '../constants/registerForm';

export const changeForm = (data: any) => ({
  type: types.CHANGE_FORM_DATA,
  data,
});

export const removeAdData = (data: any) => ({
  type: types.REMOVE_AD_DATA,
  data,
});