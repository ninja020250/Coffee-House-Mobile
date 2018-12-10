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
export default class AuthLoading extends Component {
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
     <View>
         <ActivityIndicator/>
     </View>
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
