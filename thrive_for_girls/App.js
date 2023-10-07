import { StyleSheet, View } from "react-native";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Input from "./components/Input";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Welcome />
      <Input />
    </View>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StackNavigator/>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
});
