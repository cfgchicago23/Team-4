import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function LessonDetails(props) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{textAlign: "center", fontSize: 20, margin: 20}}>Example Lesson 1</Text>
        <Text style={{textAlign: "center", fontSize: 30, fontWeight: "bold", margin: 10}}>Good things to know!</Text>
      <View style={styles.header}>
        <Text style={{borderRadius: 20, margin: 20, fontSize: 15}}>It's really important to stay safe and look out for yourself. To avoid situations where you might be at risk of human trafficking, always remember these simple rules. First, never talk to strangers or accept gifts from them without asking your parents or a trusted adult first. Second, stay close to your family or a group when you're out in public places. Third, make sure your parents or guardians know where you are at all times and have a way to contact them. If you ever feel uncomfortable or unsafe, don't hesitate to tell a grown-up you trust about it. They'll always be there to protect you and keep you safe. Just remember, you are important, and your safety matters most!</Text>
      </View>
      <View style={styles.header}>
        <Text>Helpful references:</Text>
        <Text>https://www.childrenofthenight.org/</Text>
        <Text>https://www.globalfamily.care/</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink"
  },
  header: {
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
    margin: 20,
    borderRadius: 10
  },

  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  pdfContainer: {
    flex: 1,
    width: "100%",
  },
});
