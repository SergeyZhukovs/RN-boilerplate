import * as types from "../constants/facebook";
import { FBProfile } from "react-native-fbsdk-next/types/FBProfile";

export const setProfile = (data: FBProfile | null) => ({
  type: types.SET_PROFILE,
  data,
});

export const setIsLoggedIn = (data: boolean) => ({
  type: types.SET_IS_LOGGED_IN,
  data,
});
