import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import LessonCardDetailed from "../components/LessonCardDetailed";
const Lessons = () => {
  const data = [
    {
      id: 1,
      title: "Lesson One",
      color: "#11ad09",
      completed: 1,
      icon: 'head-lightbulb'
    },

    {
      id: 2,
      title: "Lesson Two",
      color: "#11ad09",
      completed: 1,
      icon: 'head-lightbulb'

    },

    {
      id: 3,
      title: "Lesson Three",
      color: "#11ad09",
      completed: 1,
      icon: 'material-design'
    },

    {
      id: 4,
      title: "Lesson Four",
      color: "#11ad09",
      completed: 1,
      icon: 'head-lightbulb'
    },

    {
      id: 5,
      title: "Lesson Five",
      color: "#11ad09",
      completed: 1,
      icon: 'material-design'
    },

    {
      id: 6,
      title: "Lesson Six",
      color: "#11ad09",
      completed: 1,
      icon: 'head-lightbulb'
    },

    {
      id: 7,
      title: "Lesson Seven",
      color: "#11ad09",
      completed: 1,
      icon: 'material-ui'
    },
    {
      id: 8,
      title: "Lesson Eight",
      color: "#11ad09",
      completed: 1,
      icon: 'head-lightbulb'
    },
    {
      id: 9,
      title: "Lesson Nine",
      color: "#11ad09",
      completed: 1,
      icon: 'material-ui'
    },
    {
      id: 10,
      title: "Lesson Ten",
      color: "#11ad09",
      completed: 1,
      icon: 'material-design'
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <ScrollView>
        {data.map((item, index) => (
          <View key={index} style={{}}>
            <LessonCardDetailed title={item.title} description={item.description} icon={item.icon}/>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  lesson: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
    marginLeft: 20,
  },
  description: {
    fontSize: 18,
  },
  id: {
    fontSize: 14,
    color: "#666",
  },
});

export default Lessons;
