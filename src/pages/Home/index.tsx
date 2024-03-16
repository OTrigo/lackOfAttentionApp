import { StatusBar } from "expo-status-bar";
import { View, Button } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Home({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  if (user?.loggedIn === false) navigation.navigate("SignIn");
  return (
    <View style={styles.container}>
      <Button title="teste" />
      <StatusBar style="auto" />
    </View>
  );
}
