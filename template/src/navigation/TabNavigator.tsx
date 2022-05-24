import React from "react";
import {COLORS} from "@constants";
import HomeScreen from "@screens/Home";
import Profile from "@screens/Profile";
import MyConditions from "@screens/MyConditions";
import Search from "@screens/Search";
import HomeIcon from "@assets/images/icons/home-icon.svg"
import ProfileIcon from "@assets/images/icons/profile-icon.svg"
import SearchIcon from "@assets/images/icons/search-icon.svg"
import UnionIcon from "@assets/images/icons/union-icon.svg"

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {StyleSheet} from "react-native";
// import { useTranslation } from "react-i18next";

//store
const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => {
  // const { t } = useTranslation();

  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: styles.activeTab.color,
        tabBarInactiveTintColor: styles.innactiveTab.color,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
    }}
   backBehavior={"order"}
    >
          <Tab.Screen name="Hem" options={{
              tabBarIcon: ({ color, size }) => (
                  <HomeIcon color={color} />
              )
          }} component={HomeScreen} />
        <Tab.Screen name="Sök" options={{
            tabBarIcon: ({ color, size}) => (
                <SearchIcon  color={color} />
            ),
        }} component={Search} />
        <Tab.Screen name="Min kår" options={{
            tabBarIcon: ({ color, size}) => (
                <UnionIcon  color={color} />
            ),
        }} component={MyConditions} />
        <Tab.Screen name="Min profil" options={{
            tabBarIcon: ({ color, size }) => (
                <ProfileIcon  color={color} />
            ),
        }} component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    activeTab: {
        color: COLORS.WHITE
    },
    innactiveTab: {
        color: COLORS.MEDIUM_BLUE,
    },
    tabBarStyle: {
        backgroundColor: COLORS.BLUE,
        borderRadius: 20,
        height:100,
        elevation: 0,
    },
    tabBarLabelStyle: {
        fontSize: 10,
    }
});

export default TabNavigator;
