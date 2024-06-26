import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import Emotion from "../components/Emotion";
import Motivational from "../components/Motivational";
import LessonCard from "../components/LessonCard";
import { useRoute } from "@react-navigation/native";

export default function Home() {
  const route = useRoute();
  console.log(route.params)

  const lessons = [
    {
      title: "Empowerment",
      description: "Empowering girls",
    },
    {
      title: "Self Confidence",
      description: "You are Kenough",
    },
    {
      title: "Safety First",
      description: "Strangers are not your friends",
    },
    {
      title: "Smart Choices",
      description: "Always think before you act",
    },
  ];
  return (
    <View style={{ backgroundColor: "pink", flex: 1 }}>
      <HomeHeader name="Kaylee Mei" />
      <View style={styles.view}>
        <Text style={styles.text}>How are you feeling?</Text>
        <Emotion />
      </View>
      {/* <Motivational /> */}
      <Text style={styles.lessons}>Suggested Lessons</Text>
      <ScrollView>
        {lessons.map((item, index) => (
          <View key={index}>
            <LessonCard title={item.title} description={item.description} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  view: {
    alignItems: "center",
  },
  lessons: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
    marginTop: 30,
  },
});
