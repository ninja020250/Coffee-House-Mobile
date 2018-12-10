import React, { Component } from "react";
import {
  Text,
  Image,
  Dimensions,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");
import LoginForm from "../authentication/LoginForm";
export default class Login2 extends Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
  }
  login = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <ImageBackground
        source={require("../../static/background.jpeg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../static/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>welcome to my react-native App</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm login={() => this.login} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
{
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 250,
    height: 250
  },
  title: {
    color: "#fff",
    opacity: 0.9,
    textAlign: "center",
    width: 250
  }
});
