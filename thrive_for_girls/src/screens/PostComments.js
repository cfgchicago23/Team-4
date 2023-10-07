import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';

const PostComments = ({ route }) => {
  const { post } = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      const newComment = {
        id: comments.length + 1, // You should generate a unique ID for the comment
        text: comment,
      };

      // Update the state with the new comment
      setComments([...comments, newComment]);

      // Clear the comment input
      setComment('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Display post details */}
      <Text style={{ fontSize: 18, marginBottom: 16 }}>{post.title}</Text>
      <Text>{post.content}</Text>

      {/* Display existing comments */}
      <Text style={{ marginTop: 20, fontSize: 18 }}>Comments:</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      {/* Add comment input */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 8 }}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity onPress={handleAddComment} style={{ marginLeft: 8, padding: 8 }}>
          <Text>Add Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostComments;
