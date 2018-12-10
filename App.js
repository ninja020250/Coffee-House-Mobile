/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import { createRootNavigator } from "./route/router";
import Login2 from "./components/authentication/Login2";
import Home from "./components/home/Home";
import VerticalScrollView from "./components/home/VerticalScrollView";
import Products from "./components/home/Products";

export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator();
    return <Layout />;
  }
}

