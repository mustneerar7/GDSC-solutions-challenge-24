import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feed } from "../screens/Feed/Feed";
import { Profile } from "../screens/Profile/Profile";
import { HomeStack } from "./homeStack";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [{ backgroundColor: "#F6E5D8", height: 60 }],
        tabBarActiveTintColor: "#865012",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/* <Tab.Screen name="Exchange" component={Exchange} /> */}
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Search" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export { BottomTabs };

