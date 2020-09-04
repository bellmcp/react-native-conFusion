import React from "react";
import Main from "./components/MainComponent";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import { Loading } from "./components/LoadingComponent";

const { persistor, store } = ConfigureStore();

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
