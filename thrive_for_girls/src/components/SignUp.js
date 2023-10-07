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
  import React from "react";
  import { NavigationContainer, useNavigation } from "@react-navigation/native";
  
  export default function Input() {
    const navigation = useNavigation();
    return (
      <KeyboardAvoidingView style={styles.inputGroup}>
        

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => {}}
          />
        </View>
  
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => {}}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => {}}
            secureTextEntry
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Password (to verify)"
            onChangeText={(text) => {}}
            secureTextEntry
          />
        </View>
  
        <TouchableOpacity
          onPress={() => navigation.replace("Done")}
          style={styles.button}
        >
          <Text>Register</Text>
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
      // backgroundColor: "tomato",
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
      borderColor: "black",
      borderWidth: 1,
      margin: 5,
      padding: 10,
      borderRadius: 15,
    },
  });
  