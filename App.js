/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createRootNavigator } from "./route/router";

export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator();
    return <Layout />;
  }
}

