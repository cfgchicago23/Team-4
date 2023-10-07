import { StyleSheet, View } from "react-native";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Input from "./components/Input";

export default function Login() {
  return (
    <View>
      <Logo />
      <Welcome />
      <Input />
    </View>
  );
}
