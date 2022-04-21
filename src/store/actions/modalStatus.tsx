import * as types from '../constants/modalStatus';

export const setVisibility = (show: boolean) => ({
  type: types.SET_VISIBILITY,
  show,
});

export const setStatus = (value: string) => ({
  type: types.SET_STATUS,
  value,
});

export const setMessage = (value: string) => ({
  type: types.SET_MESSAGE,
  value,
});
