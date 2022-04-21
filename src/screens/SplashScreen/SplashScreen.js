import React from "react";
import { Image, View } from "react-native";

import { withInAppNotification } from "react-native-in-app-notification";



const SplashScreen = ({ onLoaded }) => {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        style={[{ width: 220, height: 200, resizeMode: "contain" }]}
        source={require("../../assets/images/SplashLogo.png")}
      />
    </View>
  );
};

export default withInAppNotification(SplashScreen);
