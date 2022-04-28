import React, { useEffect } from "react";
import { View, StatusBar, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {useAppSelector} from "@store/hooks";
import { useUserInfo } from "@store/users/selectors";

interface Header {
  title?: { color?: string; font?: string; size?: string; text: string };
  breadcrumbColor?: string;
  type?: string;
  icon?: { color: string[]; viewBox: string; d: string; onPress?: () => {} };
  logo?: {
    width: number;
    height: number;
    viewBox?: string;
    d?: string;
    color?: string[] | string | undefined;
  };
}

const Header = ({ title, breadcrumbColor, type, icon, logo }: Header) => {
  // const navigation: any = useNavigation();
  const user = useUserInfo();
  console.log('user: ', user)
  return (
    <View>
      <StatusBar />
      <Text style={{marginTop: 20}}>Hi....</Text>
    </View>
  );
};

export default Header;
