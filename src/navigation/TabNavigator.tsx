import React from "react";
import { Text } from "react-native";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";

//store
const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
        <Text>test</Text>
    </Tab.Navigator>
  );
};

export default TabNavigator;
