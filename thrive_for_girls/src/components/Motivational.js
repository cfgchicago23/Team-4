import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Motivational() {
  return (
    <View style={styles.div}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>You are beautiful and worthy</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    div: {
      padding: 10,
    },
    text: {
      fontSize: 20,
      color: "black",
      textAlign: "center"
    },
    wrapper: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      textAlign: "center",
      justifyContent: "center"
    },
  });
