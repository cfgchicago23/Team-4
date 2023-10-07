import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Image, Text, StatusBar, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Lessons = () => {
  const data = [
    {
      id: 1,
      image: 'https://i.pinimg.com/564x/f1/5f/4d/f15f4df7c5c1a3d939f46719d2c2b55c.jpg',
      description: 'Lesson One',
      color: '#11ad09',
      completed: 1,
    },

    {
      id: 2,
      image: 'https://i.pinimg.com/564x/f1/5f/4d/f15f4df7c5c1a3d939f46719d2c2b55c.jpg',
      description: 'Lesson Two',
      color: '#11ad09',
      completed: 1,
    },

    {
      id: 3,
      image: 'https://i.pinimg.com/564x/f1/5f/4d/f15f4df7c5c1a3d939f46719d2c2b55c.jpg',
      description: 'Lesson Three',
      color: '#11ad09',
      completed: 1,
    },

    {
      id: 4,
      image: 'https://i.pinimg.com/564x/f1/5f/4d/f15f4df7c5c1a3d939f46719d2c2b55c.jpg',
      description: 'Lesson Four',
      color: '#11ad09',
      completed: 1,
    },

    {
      id: 5,
      image: 'https://i.pinimg.com/564x/f1/5f/4d/f15f4df7c5c1a3d939f46719d2c2b55c.jpg',
      description: 'Lesson Five',
      color: '#11ad09',
      completed: 1,
    },

    {
      id: 6,
      image: 'https://i.pinimg.com/564x/f1/5f/4d/f15f4df7c5c1a3d939f46719d2c2b55c.jpg',
      description: 'Lesson Six',
      color: '#11ad09',
      completed: 1,
    },

    {
      id: 7,
      image: 'https://i.pinimg.com/564x/f1/5f/4d/f15f4df7c5c1a3d939f46719d2c2b55c.jpg',
      description: 'Lesson Seven',
      color: '#11ad09',
      completed: 1,
    },
  ];

  const [lessons, setLessons] = useState(data);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.lesson} onPress={() => {}}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.details}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.id}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  lesson: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: 18,
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
});

export default Lessons;