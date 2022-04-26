import React from "react";
import {
  TouchableOpacity,
  ViewStyle,
  View,
  ActivityIndicator,
} from "react-native";

import CustomText from "./CustomText";
import { common } from "@styles";
import { COLORS } from "@constants";

import IconRegular from "@components/Global/IconRegular";
interface BtnProps {
  activeOpacity?: number;
  onPress: () => void;
  type?: "categoriesBtn" | "mainBtn" | "clearBtn";
  backgroundColor?: string;
  text: string;
  icon?: { name: string; color: string; size: number };
  styles?: ViewStyle;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
}

//btnProp for types
const btnProp = {
  categoriesBtn: {
    size: "S",
    font: "TAJAWAL_REGULAR",
  },
  mainBtn: {
    size: "M",
    font: "TAJAWAL_BOLD",
  },

  clearBtn: {
    size: "M",
    font: "TAJAWAL_BOLD",
  },
};

const Button = ({
  disabled,
  activeOpacity,
  onPress,
  type = "mainBtn",
  backgroundColor = COLORS.PINK,
  text,
  icon,
  styles,
  loading,
  textColor = COLORS.WHITE,
  ...rest
}: BtnProps): JSX.Element => (
  <TouchableOpacity
    disabled={disabled}
    activeOpacity={activeOpacity}
    onPress={onPress}
    style={[common.button, styles, { backgroundColor }]}
    {...rest}
  >
    {loading ? (
      <ActivityIndicator color="#808080" />
    ) : (
      <View style={common.button}>
        {text && (
          <CustomText text={text} color={textColor} {...btnProp[type]} />
        )}
        {!!icon && (
          <IconRegular
            name={icon.name}
            color={icon.color}
            size={icon.size}
            style={{
              textAlign: "center",
              height: icon.size + icon.size / 2,
              marginHorizontal: 5,
            }}
          />
        )}
      </View>
    )}
  </TouchableOpacity>
);

export default Button;
