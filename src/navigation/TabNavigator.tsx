import React from "react";
import Header from "@components/Header";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
// import { useTranslation } from "react-i18next";

//store
const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => {
  // const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={Header} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
