import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";


export default function LessonCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("LessonDetails", props)}>
      <View style={styles.div}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.descr}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  div: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    display: "flex",
    flexDirection: "col",
    justifyContent: "space-between",
    alignContent: "center",
  },
  descr: {
    fontSize: 15,
  },
});
