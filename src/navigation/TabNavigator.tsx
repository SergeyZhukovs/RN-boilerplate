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
      <Tab.Screen name="Hem" options={{
          // headerShown: false
          tabBarIcon: ({ color }) => (<></>
              // <Icon name="search" family="Ionicons" color={color} size={25} />
          ),
      }} component={Header} />
        <Tab.Screen name="Sök" options={{
            // headerShown: false
            tabBarIcon: ({ color }) => (<></>
                // <Icon name="search" family="Ionicons" color={color} size={25} />
            ),
        }} component={Header} />
        <Tab.Screen name="Min kår" options={{
            // headerShown: false
            tabBarIcon: ({ color }) => (<></>
                // <Icon name="search" family="Ionicons" color={color} size={25} />
            ),
        }} component={Header} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
