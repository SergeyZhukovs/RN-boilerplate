import React from "react";
import { Text as RNText, TextStyle, View } from "react-native";
import { COLORS, SIZES, FONTS } from "@constants";
import { TFunctionResult } from "i18next";

interface TextProps {
  size?: string; // size name
  styles?: TextStyle;
  font?:
    | "DUBAI_MEDIUM"
    | "DUBAI_BOLD"
    | "DUBAI_REGULAR"
    | "DUBAI_LIGHT"
    | "TAJAWAL_BOLD"
    | "TAJAWAL_LIGHT"
    | "TAJAWAL_REGULAR"
    | "TAJAWAL_MEDIUM"
    | string
    | undefined;
  color?: string;
  children?: React.ReactNode;
  text: string | number | TFunctionResult;
  center?: boolean;
}

const getSize: { [key: string]: number } = SIZES;

const getFonts: { [key: string]: string } = FONTS;

const checkSize = (size: string): number => getSize[size] || 0;

const checkFonts = (font: string): string => getFonts[font] || "";

const CustomText = ({
  size = "S",
  children,
  styles,
  font = "TAJAWAL_REGULAR",
  color,
  text,
    center,
  ...rest
}: TextProps): JSX.Element => (
  <RNText
    {...rest}
    style={[
      {
        fontSize: checkSize(size),
        fontFamily: checkFonts(font),
        color: color || COLORS.BLACK,
        alignItems: 'center',
        
      },
      center && {textAlign: 'center'},
      styles,
    ]}
  >
    {text}
    <View style={{ width: '100%'}}>
    {children}
    </View>
  </RNText>
);

export default CustomText;
