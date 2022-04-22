import { StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "src/constants";

interface Style {
    primaryBtn: ViewStyle;
    secondaryBtn: ViewStyle;
    smallBtn: ViewStyle;
}

export default StyleSheet.create<Style>({
    primaryBtn: {
        color: COLORS.WHITE,
  },
  secondaryBtn: {
    borderColor: COLORS.WHITE,
    borderWidth: 2, 
  }, 
  smallBtn: {
      
  }
});
