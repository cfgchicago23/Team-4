import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function LessonCardDetailed(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("LessonDetails", {props})}>
      <View style={styles.div}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{props.title}</Text>
          <MaterialCommunityIcons name={props.icon} size={60} />
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
    padding: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  descr: {
    fontSize: 15,
  },
});
