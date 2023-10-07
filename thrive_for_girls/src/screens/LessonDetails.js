import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

export default function LessonDetails(props) {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Lesson Details</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    div: {
      padding: 10,
    },
    text: {
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      textAlign: "center"
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
      fontSize: 15,
    },
  });
  