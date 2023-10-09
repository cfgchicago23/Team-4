import { SafeAreaView, View } from "react-native";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Welcome from "../components/Welcome";

export default function Login() {
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <Logo />
      {/* <Welcome /> */}
      <Input />
    </SafeAreaView>
  );
}
