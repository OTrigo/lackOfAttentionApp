import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Button, TextInput, SafeAreaView } from "react-native";
import { styles } from "./styles";
import useGetUser from "../../hooks/useGetUser";
import { UserSessionProps } from "../../types/UserProps";

export default function SignIn({ setUser, setLogin }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUserInfo = async () => {
    try {
      return await useGetUser({ name: username, password });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogin = async () => {
    await getUserInfo().then((value?: UserSessionProps) => {
      setLogin(value?.loggedIn);
      setUser(value);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Sign In" onPress={handleLogin} />
      </SafeAreaView>
    </View>
  );
}
