import React, { Component } from "react";
import Login from "../components/authentication/Login2";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Category from "../components/home/orderScreen/VerticalScrollView";
import Products from "../components/home/orderScreen/Products";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import LocationScreen from "../components/home/LocationScreen";
import MissionScreen from "../components/home/MissionScreen";
import AccountScreen from "../components/home/AccountScreen";
import NewsScreen from "../components/home/newsScreen/NewsScreen";

export const SignedOut = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

export const Shopping = createStackNavigator({
  Category: {
    screen: Category
  },
  Products: {
    screen: Products
  },
  initialRouteName: "Category"
});

export const SignedIn = createBottomTabNavigator(
  {
    news: {
      screen: NewsScreen,
      navigationOptions: {
        tabBarLabel: "tin tức",
        tabBarIcon: ({ color = "#57606f" }) => (
          <IconFontAwesome name="newspaper" size={20} color={color} />
        )
      }
    },
    products: {
      screen: Shopping,
      navigationOptions: {
        tabBarLabel: "đặt hàng",
        tabBarIcon: ({ color = "#57606f" }) => (
          <IconFontAwesome name="motorcycle" size={20} color={color} />
        )
      }
    },
    Location: {
      screen: LocationScreen,
      navigationOptions: {
        tabBarLabel: "vị trí",
        tabBarIcon: ({ color = "#57606f" }) => (
          <IconFontAwesome name="map" size={20} color={color} />
        )
      }
    },
    Mission: {
      screen: MissionScreen,
      navigationOptions: {
        tabBarLabel: "nhiệm vụ",
        tabBarIcon: ({ color = "#57606f" }) => (
          <IconFontAwesome name="bookmark" size={20} color={color} />
        )
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: "tài khoản",
        tabBarIcon: ({ color = "#57606f" }) => (
          <IconFontAwesome name="user" size={20} color={color} />
        )
      }
    }
  },
  {
    initialRouteName: "news"
  }
);

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
