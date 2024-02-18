// The entrypoint of the application.
// Apply Providers and startup configs here.

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';

import { LoginStack } from "./navigators/LoginStack";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Outfit-Black': require('./assets/fonts/Outfit-Black.ttf'),
    'Outfit-SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  if(!fontsLoaded) return

  return (
    <NavigationContainer>
      <LoginStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}