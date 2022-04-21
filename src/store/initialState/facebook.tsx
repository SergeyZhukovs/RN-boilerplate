import { FBProfile } from "react-native-fbsdk-next/types/FBProfile";

export type FacebookInitialState = {
  facebookProfile: FBProfile | null;
  facebookIsLoggedIn: boolean;
};
export default {
  facebookProfile: null,
  facebookIsLoggedIn: false,
} as FacebookInitialState;
