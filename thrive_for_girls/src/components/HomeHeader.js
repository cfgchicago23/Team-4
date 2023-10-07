import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

let hours = new Date().getHours();

export default function HomeHeader(props) {
  let greeting = "Good Morning";
  if (hours >= 11 && hours <= 16) {
    greeting = "Good Afternoon";
  } else if (hours > 16 || hours < 21) {
    greeting = "Good Evening";
  } else if (hours >= 21 || hours < 4) {
    greeting = "Good Night";
  }

  return (
    <SafeAreaView>
      <View style={styles.div}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{greeting}, {"\n" + props.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  div: {
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  wrapper: {
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
