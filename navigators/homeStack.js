// The home stack component.

import { createStackNavigator } from "@react-navigation/stack";
// Bottom Tabs component.
import { Home } from "../screens/Home/Home";
import { ProductDetails } from "../screens/ProductDetails/ProductDetails";
import { Complete } from "../screens/Complete/Complete";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Complete" component={Complete} />
    </Stack.Navigator>
  );
};

export { HomeStack };
