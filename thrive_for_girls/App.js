import { StyleSheet, View } from "react-native";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Input from "./components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Welcome />
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
});
