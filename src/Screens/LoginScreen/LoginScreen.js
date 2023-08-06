import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const backgroundImage = require('../../Source/Photo_BG.png');

const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

    const handleMail = text => {
        setMail(text)
    };

    const handlePassword = text => {
        setPassword(text)
    };

    const login = () => {
        if (!mail || !password) {
            alert("Please fill in all fields");
            return
        };
        navigation.navigate("Home", { screen: "PostsScreen" });
    };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerKeyboard}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={styles.inputMail}
                placeholder="Адреса електронної пошти"
                inputMode="email"
                value={mail}
                onChangeText={handleMail}
              />
              <TextInput
                style={styles.inputPassword}
                placeholder="••••••••••••"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={handlePassword}
              />
              <TouchableOpacity
                style={styles.showPassword}
                activeOpacity={0.5}
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}
              >
                <Text style={styles.showPasswordText}>
                  {hidePassword ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.5}
                onPress={login}
              >
                <Text style={styles.loginButtonText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginLink}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Registratione")}
              >
                <Text style={styles.loginLinkText}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  containerKeyboard: {
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  photoContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    marginTop: 32,
    color: "#212121",
  },
  inputMail: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  inputPassword: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  showPasswordText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  showPassword: {
    top: -34,
    left: 130,
  },
  loginButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default LoginScreen;