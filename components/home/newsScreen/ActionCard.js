import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
const screen = Dimensions.get("window");
const marginProduct = 10;
const numberOfcard = 3;
const numberOfMargin = 3 * 2;
const widthOfCard =
  (screen.width - marginProduct * numberOfMargin) / numberOfcard;
export default class ActionCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <IconFontAwesome name="barcode" size={18} color="#ffffff" />
        </View>
        <Text style={styles.title}>Tích điểm</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    width: widthOfCard,
    height: widthOfCard,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100 / 1.5,
    backgroundColor: "#ffa502",
    width: widthOfCard / 3,
    height: widthOfCard / 3
  },
  title: {}
});
