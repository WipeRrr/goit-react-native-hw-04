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
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const backgroundImage = require("../../Source/Photo_BG.png");

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isValid, setIsValid] = useState(true);

    const handleLogin = text => {
        setLogin(text)
    };

    const handlePassword = text => {
        setPassword(text)
    };

   const register = () => {
     if (!isValid || !login || !mail || !password) {
       alert("Please fill in all fields");
       return;
     }
     navigation.navigate("Home", { screen: "PostsScreen" });
  };
  
  const validateEmail = (text) => {
    setMail(text);
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValid(emailPattern.test(text));
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
            style={styles.containerKeyBoard}
          >
            <View style={styles.container}>
              <View style={styles.photoContainer}>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
                  <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={styles.inputLogin}
                placeholder="Логін"
                inputMode="text"
                value={login}
                onChangeText={handleLogin}
              />
              <TextInput
                style={styles.inputMail}
                placeholder="Адреса електронної пошти"
                inputMode="email"
                value={mail}
                onChangeText={validateEmail}
                autoComplete="email"
              />
              <TextInput
                style={styles.inputPassword}
                placeholder="Пароль"
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
                style={styles.registerButton}
                activeOpacity={0.5}
                onPress={register}
              >
                <Text style={styles.registerButtonText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginLink}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
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
  containerKeyBoard: {
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
  addButton: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    marginTop: 32,
    color: "#212121",
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
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
  registerButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText: {
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

export default RegistrationScreen;