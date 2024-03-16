import { StatusBar } from "expo-status-bar";
import { View, Button, TextInput, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import useGetUser from "../../hooks/useGetUser";
import UserContext from "../../contexts/UserContext";

export default function SignIn({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");

  const getUser = async (name: string, password: string) => {
    const teste = await useGetUser({ name, password });
    if (teste?.loggedIn) {
      setUser(teste);
      navigation.navigate("Home");
    }
  };

  console.log("User", user);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          textContentType="password"
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <Button title="Login" onPress={() => getUser(username, password)} />
    </View>
  );
}
