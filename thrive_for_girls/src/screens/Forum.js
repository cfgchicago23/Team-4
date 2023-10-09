import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { posts } from "./ForumData"; // Import your data
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons
import { useNavigation } from "@react-navigation/native";

const Forum = () => {
  const navigation = useNavigation();

  const handleNewPost = () => {
    // Navigate to the screen where users can create a new post (an empty textbox for input)
    navigation.navigate("CreatePost");
  };

  return (
      <View style={{ flex: 1, padding: 40 }}>
        {/* Adjust the alignItems and margin properties */}
        <TouchableOpacity
          onPress={handleNewPost}
          style={{ alignItems: "center", marginTop: 40, backgroundColor: "#ebd4ff", borderRadius: 20, padding: 20 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }} >
            <Text style={{ fontSize: 18, marginRight: 10 }}>
              Create a New Post
            </Text>
            <AntDesign name="plus" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PostComments", { post: item })
              }
            >
              <View
                style={{
                  padding: 16,
                  borderBottomWidth: 1,
                  borderColor: "#ccc",
                }}
              >
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
