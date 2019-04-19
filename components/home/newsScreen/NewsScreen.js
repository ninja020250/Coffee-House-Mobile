import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ActionCard from "./ActionCard";
const smallMargin = 5;
const largeMargin = 10;
export default class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.main, styles.ActionCards]}>
          <ActionCard title="Tích điểm" />
          <ActionCard title="Đặt hàng" />
          <ActionCard title="Coupon" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f2f6",
    flex: 1
  },
  ActionCards: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  main: {}
});
