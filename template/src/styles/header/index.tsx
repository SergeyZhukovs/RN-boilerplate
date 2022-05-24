import { StyleSheet, View, ViewStyle } from "react-native";

interface Style {
  header: ViewStyle;
  container: ViewStyle;
  text: ViewStyle;
  icon: ViewStyle;
  logo: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 100,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: { textAlign: "center"},
  icon: {
    position: "absolute",
    right: 0,
  },
  logo: {
    marginRight: 10
  }
});
