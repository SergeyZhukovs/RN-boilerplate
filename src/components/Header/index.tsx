import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";


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
  const navigation: any = useNavigation();

  return (
    <View>
      <StatusBar />

    </View>
  );
};

export default Header;
