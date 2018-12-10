import React, { Component } from "react";
import Login from "../components/authentication/Login2";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Home from "../components/home/VerticalScrollView";
import Detail from "../components/home/Products";
export const SignedOut = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

export const SignedIn = createStackNavigator({
  Home: {
    screen: Home
    // navigationOptions: {
    //   title: "Home"
    // }
  },
  Detail: {
    screen: Detail
  }
});

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: SignedOut
        }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    )
  );
};
