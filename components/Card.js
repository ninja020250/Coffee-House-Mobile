import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground
} from "react-native";
var screen = Dimensions.get("window");
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const marginElement = 6;
const marginProduct = 10;
const widthOfCard = (screen.width - marginProduct * 4) / 2;
const heightOfCard = ((screen.width - 10 * 4) / 2 / 100) * 150;
const heightOfTopContainer = widthOfCard;
const heightOfBottomContainer = heightOfCard - widthOfCard;
const heightOfElement = (heightOfBottomContainer - marginElement * 7) / 3;
const heightOfContainerInCard = 0;

export default class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={this.props.imgUrl}
          imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          style={styles.TopContainer}
        />
        <View style={styles.BottomContainer}>
          <View style={styles.groupInfo}>
            <Text style={styles.productName}>{this.props.name}</Text>
            <Text style={styles.productSize}>
              Size {this.props.size}({this.props.ml} ml)
            </Text>
          </View>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>45.000</Text>
            <IconFontAwesome
              name="plus"
              size={20}
              color={"#ffa502"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "#95a5a6",
    borderWidth: 0.5,
    width: widthOfCard,
    height: heightOfCard
  },
  groupInfo: {
    borderColor: "#95a5a6",
    // marginHorizontal: marginElement,
    borderBottomWidth: 0.5,
    marginBottom: marginElement
  },
  TopContainer: {
    top: 0,
    marginTop: 0,
    width: "100%",
    height: heightOfTopContainer,
    marginBottom: marginElement
  },
  BottomContainer: {
    paddingHorizontal: marginElement,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  productName: {
    // marginHorizontal: marginElement,
    fontWeight: "bold",
    marginBottom: marginElement
  },
  productSize: {
    // marginHorizontal: marginElement,
    marginBottom: marginElement
  },
  productPriceContainer: {
    marginHorizontal: marginElement,
    alignSelf: "center",
    width: (screen.width - marginProduct * 4) / 2 - marginElement * 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productPrice: {
    fontWeight: "bold"
  }
});
