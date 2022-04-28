import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  primaryBtn: ViewStyle;
  secondaryBtn: ViewStyle;
  smallBtn: ViewStyle;
}

export default StyleSheet.create<Style>({
  primaryBtn: {
    flex: 0,
    width: 315,
    height: 50,
  },
  secondaryBtn: {
    flex: 0,
    borderWidth: 2,
    width: 315,
    height: 50,
  },
  smallBtn: {
    flex: 0,
    width: 164,
    height: 46,
  },
});
