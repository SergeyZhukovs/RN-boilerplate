import { StyleSheet, ViewStyle } from "react-native";

interface Style {
    mainBtn: ViewStyle;
  extendBtn: ViewStyle;
  clearBtn: ViewStyle;
  adminBtn: ViewStyle;
}

export default StyleSheet.create<Style>({
  categoriesBtn: {
    width: 163,
    flex: 0,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  extendBtn: {
    marginTop: 15,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  clearBtn: {
    width: 106,
    height: 50,
    marginRight: 10,
  },
  mainBtn: {
    width: 221,
    height: 50,
    flexGrow: 2,
  },
  seeAllButton: {
    margin: 5,
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
