import React from "react";
import { Provider } from "react-redux";
import MainNavigator from "@navigation";
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
