import React from "react";
import Main from "./components/MainComponent";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
