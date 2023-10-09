import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

export default function Input() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // create users for testing and demo
  users = [
    {
      first_name: "Kaylee Mei",
      email: "Kayleemeichao@gmail.com",
      password: "abc123",
      type: "user",
    },
    {
      first_name: "Lily",
      email: "Lily@gmail.com",
      password: "abc123",
      type: "leader",
    },
  ];

  const handleLogin = async () => {
    //check for matching user and password
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === email &&
        users[i].password === password &&
        users[i].type == "user"
      ) {
        navigation.navigate("HomeScreen", users[i]);
      } else if (
        users[i].email === email &&
        users[i].password === password &&
        users[i].type == "leader"
      ) {
        navigation.navigate("AdimHomeScreen", users[i]);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.inputGroup}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.replace("Register")} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          New here? Register
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    padding: 5,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    fontSize: 18,
    borderRadius: 20,
  },
  button: {
    fontSize: 18,
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 15,
  },
});
