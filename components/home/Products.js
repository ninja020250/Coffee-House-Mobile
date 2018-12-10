import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground
} from "react-native";
import Card from "../Card";

const products = [
  [
    {
      name: "Trà sữa",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/milktea.jpg")
    },
    {
      name: "Cà phê",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/coffee.jpg")
    }
  ],
  [
    {
      name: "Thức uống đá xay",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/ice.jpg")
    },
    {
      name: "Vật Phẩm",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/coffee.jpg")
    }
  ],
  [
    {
      name: "bánh ngọt",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/cake2.jpg")
    },
    {
      name: "bánh mặn",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/cake1.jpg")
    }
  ],
  [
    {
      name: "Món gần đây",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/special1.jpg")
    },
    {
      name: "Món nổi bật",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/special2.jpg")
    }
  ],
  [
    {
      name: "Món gần đây",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/special1.jpg")
    },
    {
      name: "Món nổi bật",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/special2.jpg")
    }
  ],
  [
    {
      name: "Món gần đây",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/special1.jpg")
    },
    {
      name: "Món nổi bật",
      size: "nhỏ",
      ml: 457,
      imgUrl: require("../../static/products/special2.jpg")
    }
  ]
];
export default class Products extends Component {
  renderListProduct = () => {
    return products.map((product, index) => {
      return (
        <View key={index} style={styles.groupItems}>
          <Card
            name={product[0].name}
            size={product[0].size}
            ml={product[0].ml}
            imgUrl={product[0].imgUrl}
          />
          <Card
            name={product[1].name}
            size={product[1].size}
            ml={product[1].ml}
            imgUrl={product[1].imgUrl}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderListProduct()}</ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  groupItems: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
