import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";

import NewApp from "./screens";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NewApp />
      </Provider>
    );
  }
}
