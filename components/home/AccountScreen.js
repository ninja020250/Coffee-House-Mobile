import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default class Account extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../static/fix.png")} />
        <Text>đang code chưa xong đâu ba</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1
  },
  image: {
    width: "100%"
  }
});
