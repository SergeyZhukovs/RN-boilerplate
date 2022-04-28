import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { navigationRef } from "@services/RootNav";
import MainNavigator from "@navigation";
import { COLORS, TEXTS } from "@constants";
import CustomInput from "@components/Global/CustomInput";
import Header from "@components/Header";
import { setupStore } from "@store/store";

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const store = setupStore();

const App = () => {

  return (
      <Provider store={store}>
         <MainNavigator />
      </Provider>
  );
};

export default App;
