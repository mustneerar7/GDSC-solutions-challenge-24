// The root stack component.

import { createStackNavigator } from "@react-navigation/stack";

import { Onboard } from "../screens/Onboard/Onboard";
import { Login } from "../screens/Login/Login";

// Bottom Tabs component.
import { BottomTabs } from "./BottomTabs";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Onboard" component={Onboard} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export { LoginStack };
