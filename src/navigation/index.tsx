import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
//screens
import LogInPage from "../screens/LogInPage";

//components
import SplashScreen from "../screens/SplashScreen/SplashScreen";


const MainNavigator = (): JSX.Element => {
  const Stack = createStackNavigator();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(true);

  const _SplashScreen = () => (
    <SplashScreen
      onLoaded={() => {
        setLoading(false);
      }}
    />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen name="SplashScreen" component={_SplashScreen} />
        ) : token ? (
          <>
            <Stack.Screen name="Home" component={TabNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name="LogInPage" component={LogInPage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
