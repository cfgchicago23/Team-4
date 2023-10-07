// Forum.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { posts } from './ForumData'; // Import your data

const Forum = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PostDetails', { post: item })}
          >
            <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <Text style={{ marginTop: 8 }}>{item.content}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Forum;
