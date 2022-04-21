import { FBProfile } from "react-native-fbsdk-next/types/FBProfile";

export const selectFacebookProfile = ({
  facebook: { facebookProfile },
}: any): FBProfile | null => facebookProfile;

export const selectFacebookIsLoggedIn = ({
  facebook: { facebookIsLoggedIn },
}: any): boolean => facebookIsLoggedIn;
