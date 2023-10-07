// components/PostList.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const PostList = ({ posts, navigation }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('PostDetail', { post: item })}
        >
          <View>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default PostList;
