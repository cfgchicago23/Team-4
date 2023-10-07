import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export default function Emotion() {
  const [happySelected, setHappySelected] = useState(false);
  const [neutralSelected, setNeutralSelected] = useState(true);
  const [sadSelected, setSadSelected] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.div}>
        <View
          style={[
            styles.wrapper,
            happySelected && { backgroundColor: "#fbe2a3" }, // Change background color when selected - yellow
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              setHappySelected(true);
              setNeutralSelected(false);
              setSadSelected(false);
            }}
          >
            <Entypo name="emoji-happy" size={70} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.wrapper,
            neutralSelected && { backgroundColor: "#d0d0d0" }, // Change background color when selected - gray
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              setHappySelected(false);
              setNeutralSelected(true);
              setSadSelected(false);
            }}
          >
            <Entypo name="emoji-neutral" size={70} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.wrapper,
            sadSelected && { backgroundColor: "#baedfa" }, // Change background color when selected - blue
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              setHappySelected(false);
              setNeutralSelected(false);
              setSadSelected(true);
            }}
          >
            <Entypo name="emoji-sad" size={70} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  div: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    margin: 10,
    borderRadius: 15,
    padding: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "center",
    backgroundColor: "pink", // Default background color
  },
});
