// The root stack component.

import { createStackNavigator } from "@react-navigation/stack";
import { Exchange } from "../screens/Exchange/Exchange";
import { Onboard } from "../screens/Onboard/Onboard";
import { Login } from "../screens/Login/Login";
import { ProductDetails } from "../screens/ProductDetails/ProductDetails";
// import {Complete} from "../screens/Complete/Complete"
// Bottom Tabs component.
import { BottomTabs } from "./BottomTabs";
import { Choice } from "../screens/Choice/Choice";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Onboard" component={Onboard} /> */}
      {/* <Stack.Screen name="Complete" component={Complete} /> */}
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Choice" component={Choice}/>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Exchange" component={Exchange} />
    </Stack.Navigator>
  );
};

export { LoginStack };
