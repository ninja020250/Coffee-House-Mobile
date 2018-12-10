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
  KeyboardAvoidingView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({
        showPass: false,
        press: true
      });
    } else {
      this.setState({
        showPass: true,
        press: false
      });
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../../static/background.jpeg")}
        style={styles.container}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View stype={styles.logoContainer}>
            <IconFontAwesome
              style={styles.logo}
              name="cubes"
              size={80}
              color={"rgba(255,255,255,0.7)"}
            />
          </View>
          <View stype={styles.logoContainer}>
            <Text style={styles.logotext}>Sample Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <IconFontAwesome
              name="user-o"
              size={30}
              color={"rgba(255,255,255,0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"username"}
              placeholderTextColor={"rgba(255,255,255,0.7)"}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <IconFontAwesome
              name="lock"
              size={30}
              color={"rgba(255,255,255,0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showPass}
              placeholder={"Password"}
              placeholderTextColor={"rgba(255,255,255,0.7)"}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.btnEye}
              onPress={this.showPass.bind(this)}
            >
              <IconFontAwesome
                name={this.state.press == false ? "eye" : "eye-slash"}
                size={26}
                color={"rgba(255,255,255,0.7)"}
              />
            </TouchableOpacity>
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.99]}
            colors={["#3ABDB4", "#3EC5CC"]}
            style={styles.btnLogin}
          >
            <TouchableOpacity >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  // flexDimensions: {
  //   flex: 1,
  //   width: null,
  //   height: null,
  //   // justifyContent: "center",
  //   // paddingTop: 200,
  //   alignItems: "center"
  // },
  logo: {
    // marginTop: 10
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  logotext: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
    textAlign: "center",
    marginBottom: 50
  },
  input: {
    width: width - 55,
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "#E4EDEB",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37
  },
  btnLogin: {
    width: width - 55,
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: "#E4EDEB",
    fontSize: 16,
    textAlign: "center"
  }
});
