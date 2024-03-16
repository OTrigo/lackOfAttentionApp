import React, { useState } from "react";
import Home from "./src/pages/Home";
import SignIn from "./src/pages/SignIn";
import UserContext from "./src/contexts/UserContext";
import { UserSessionProps } from "./src/types/UserProps";
import { NoLoggedUser } from "./src/utils/NoLoggedUser";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [user, setUser] = useState<UserSessionProps>(NoLoggedUser);

  const Stack = createNativeStackNavigator();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
