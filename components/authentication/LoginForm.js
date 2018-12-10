import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
export default class LoginForm extends Component {
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
      <View style={StyleSheet.container}>
        <View>
          <IconFontAwesome
            name="user-o"
            size={30}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="email-address"
          />
        </View>
        <View>
          <IconFontAwesome
            name="lock"
            size={30}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={this.state.showPass}
            placeholderTextColor="rgba(255,255,255,0.7)"
            placeholder="password"
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
            style={styles.buttonContainer}
          >
            <TouchableOpacity onPress={this.props.login()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
     
      </View>
    );
  }
}

{
  /* <TouchableOpacity style={styles.buttonContainer}>
<Text style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity> */
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    paddingLeft: 45,
    height: 45,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    marginHorizontal: 25,
    color: "#FFF"
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    marginHorizontal: 25,
    marginBottom: 20
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "900"
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37
  }
});
