import React from "react";
import { View, Text, FlatList } from "react-native";
import { posts } from "./ForumData";

const PostDetails = ({ route }) => {
  const { post } = route.params;

  // Filter comments for the selected post
  const commentsForPost = posts.find((p) => p.id === post.id);

  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ marginTop: 16, fontSize: 20 }}>Comments:</Text>
        <FlatList
          data={commentsForPost.comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ccc" }}
            >
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;
