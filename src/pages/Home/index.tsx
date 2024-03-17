import { StatusBar } from "expo-status-bar";
import { View, Button } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";

//@ts-ignore
export default function Home({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Button title="teste" />
      <StatusBar style="auto" />
    </View>
  );
}
