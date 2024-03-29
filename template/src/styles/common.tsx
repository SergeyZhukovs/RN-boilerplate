import {
  StyleSheet,
  Dimensions,
  Platform,
  ViewStyle,
  I18nManager,
} from "react-native";
import { COLORS, FONTS, SIZES } from "@constants";
interface Style {
  main: ViewStyle;
  button: ViewStyle;
  boxShadow: ViewStyle;
  input: ViewStyle;
  checkbox: ViewStyle;
  errorText: ViewStyle;
  dropdownErrorText: ViewStyle;
  mainBackground: ViewStyle;
  subBackground: ViewStyle;
  sliderPagination: ViewStyle;
  keyboardAvoiding: ViewStyle;
  flex: ViewStyle;
}

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export default StyleSheet.create<Style>({
  main: {
    paddingHorizontal: 20,
    height: height,
    width: width,
    marginHorizontal: I18nManager.isRTL && Platform.OS === "ios" ? 20 : 0,
  },
  mainBackground: {
    backgroundColor: COLORS.CREAMY,
  },
  subBackground: {
    backgroundColor: COLORS.LIGHT_SILVER,
  },
  button: {
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  boxShadow: {
    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    position: "relative",
    height: 50,
    width: 315,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: SIZES.P,
    color: COLORS.BLACK,
    fontFamily: FONTS.DUBAI_MEDIUM,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    paddingTop: 10,
    flexBasis: "100%",
    fontSize: SIZES.S1,
  },
  dropdownErrorText: {
    paddingTop: 0,
    marginTop: -5,
    marginBottom: 10,
  },
  sliderPagination: {
    lineHeight: 27,
    position: "absolute",
    zIndex: 1,
    bottom: 12,
    alignSelf: "center",
  },
  keyboardAvoiding: {
    flex: 1,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
});
