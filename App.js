// The entrypoint of the application.
// Apply Providers and startup configs here.

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { LoginStack } from "./navigators/LoginStack";

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}