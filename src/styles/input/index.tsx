import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { COLORS } from "../../constants";

interface Style {
  container: ViewStyle;
  label: ViewStyle;
  floatLabel: ViewStyle;
  icon: ViewStyle;
  active: ViewStyle;
  disabled: ViewStyle;
  checkbox: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    position: "relative",
    marginBottom: 15,
  },
  label: {
    position: "absolute",
    //top: -25,
    zIndex: 1,
    //marginBottom: 10,
  },
  floatLabel: {
    position: "absolute",
    zIndex: 3,
    left: 25,
  },
  disabled: {
    borderColor: COLORS.BLACK,
    opacity: 0.3,
  },
  active: {
    borderColor: COLORS.BLACK,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0,
    height: "100%",
    width: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 5, 
    width: 20,
    height: 20,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5, 
    borderColor: COLORS.BLACK
  },
});
