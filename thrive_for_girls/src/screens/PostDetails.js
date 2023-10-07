// PostDetails.js

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { comments } from './ForumData';

const PostDetails = ({ route }) => {
  const { post } = route.params;

  // Assuming you have a comments array in your mockData.js
  const commentsForPost = comments.filter((comment) => comment.postId === post.id);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 18 }}>{post.title}</Text>
        <Text style={{ marginTop: 8 }}>{post.content}</Text>
      </View>
      <Text style={{ marginTop: 16, fontSize: 20 }}>Comments:</Text>
      <FlatList
        data={commentsForPost}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PostDetails;
