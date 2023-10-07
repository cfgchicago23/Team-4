import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LessonCard(props) {
  return (
    <View style={styles.div}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.descr}>{props.description}</Text>
      </View>
    </View>
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
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
    },
    descr: {
        fontSize: 15

    },
  });
  