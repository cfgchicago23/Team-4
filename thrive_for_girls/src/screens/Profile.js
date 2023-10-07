import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const Profile = () => {
  const data = [
    { id: 1, image: 'https://img.icons8.com/color/70/000000/cottage.png', title: 'Group' },
    {
      id: 2,
      image: 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg',
      title: 'Team Lead',
    },
    { id: 3, image: 'https://cdn-icons-png.flaticon.com/512/5962/5962463.png', title: 'Feedback' },
    { id: 4, image: 'https://cdn3.iconfinder.com/data/icons/emoticons-48/100/Smileys_umgewandelt-01-512.png', title: 'Mood' },
    { id: 5, image: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-edit-profile-icon-trendy-style-isolated-background-png-image_4833928.jpg', title: 'Edit' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png' }}
          />
          <Text style={styles.name}>Jane Doe</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          style={styles.container}
          enableEmptySections={true}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.icon} source={{ uri: item.image }} />
                  <Text style={styles.title}>{item.title}</Text>
                  <Image
                    style={styles.btn}
                    source={{ uri: 'https://img.icons8.com/customer/office/40' }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink"
  },
  header: {
    backgroundColor: "pink",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FF6347",
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 30,
    color: "#EE82EE",
    marginLeft: 4,
  },
  btn: {
    marginLeft: "auto",
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: "pink",
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "black",
    fontSize: 30,
    alignSelf: "center",
    marginLeft: 10,
    fontWeight: "bold"
  },
});

export default Profile;


