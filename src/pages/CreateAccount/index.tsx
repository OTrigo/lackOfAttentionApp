import { StatusBar } from "expo-status-bar";
import { View, Button } from "react-native";
import { styles } from "./styles";

export default function SignIn(){

  return (
    <View style={styles.container}>
      <Button title="Create Account" />
      <StatusBar style="auto" />
    </View>
  );
};
