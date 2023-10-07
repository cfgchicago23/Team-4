import { View, Text } from "react-native";
import Logo from "../components/Logo";
import SignUp from "../components/SignUp";
import { Dropdown } from "../components/DropdownComponent";
//import DropdownComponent from "react-native-element-dropdown/lib/typescript/components/Dropdown";
//<Dropdown />
export default function Register() {
  return (
    <View>
        <Logo />
        <SignUp />
    </View>
  );
}
