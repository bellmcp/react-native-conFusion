import React from "react";
import Main from "./components/MainComponent";
import { StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return <Main />;
  }
}
