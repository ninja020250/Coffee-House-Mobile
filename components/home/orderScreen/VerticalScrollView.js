import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";

var screen = Dimensions.get("window");
const category = [
  [
    {
      id: 1,
      name: "Trà sữa",
      imgUrl: require("../../../static/products/milktea.jpg")
    },
    {
      id: 2,
      name: "Cà phê",
      imgUrl: require("../../../static/products/coffee.jpg")
    }
  ],
  [
    {
      id: 12,
      name: "Thức uống đá xay",
      imgUrl: require("../../../static/products/ice.jpg")
    },
    {
      id: 3,
      name: "Vật Phẩm",
      imgUrl: require("../../../static/products/coffee.jpg")
    }
  ],
  [
    {
      id: 4,
      name: "bánh ngọt",
      imgUrl: require("../../../static/products/cake2.jpg")
    },
    {
      id: 5,
      name: "bánh mặn",
      imgUrl: require("../../../static/products/cake1.jpg")
    }
  ],
  [
    {
      id: 6,
      name: "Món gần đây",
      imgUrl: require("../../../static/products/special1.jpg")
    },
    {
      id: 7,
      name: "Món nổi bật",
      imgUrl: require("../../../static/products/special2.jpg")
    }
  ],
  [
    {
      id: 8,
      name: "Món gần đây",
      imgUrl: require("../../../static/products/special1.jpg")
    },
    {
      id: 9,
      name: "Món nổi bật",
      imgUrl: require("../../../static/products/special2.jpg")
    }
  ],
  [
    {
      id: 10,
      name: "Món gần đây",
      imgUrl: require("../../../static/products/special1.jpg")
    },
    {
      id: 11,
      name: "Món nổi bật",
      imgUrl: require("../../../static/products/special2.jpg")
    }
  ]
];
export default class VerticalScrollView extends Component {
  constructor(props) {
    super(props);
  }

  navigateToListproduct = () => {
    this.props.navigation.navigate("Products");
  };

  getListCategory = () => {
    return category.map((product, index) => {
      return (
        <View key={index} style={styles.groupItems}>
          <TouchableOpacity
            style={styles.productContainer}
            onPress={this.navigateToListproduct}
          >
            <ImageBackground
              source={product[0].imgUrl}
              imageStyle={{ borderRadius: 10 }}
              style={styles.productContainer}
            >
              <Text style={styles.productTitle}>{product[0].name}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.productContainer}
            onPress={this.navigateToListproduct}
          >
            <ImageBackground
              source={product[1].imgUrl}
              style={styles.productContainer}
              imageStyle={{ borderRadius: 5 }}
              style={styles.productContainer}
            >
              <Text style={styles.productTitle}>{product[1].name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>Choose what you like</Text>
        </View>
        <ScrollView>{this.getListCategory()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 15,
    flex: 1
  },
  headerTitle: {
    margin: 10,
    fontSize: 15
  },
  groupItems: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  productTitle: {
    color: "white",
    fontSize: 15
  },
  productContainer: {
    width: (screen.width - 10 * 4) / 2,
    // marginHorizontal: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    height: ((screen.width - 10 * 4) / 2 / 100) * 80
  }
});
