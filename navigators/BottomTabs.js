import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home/Home";
import { Feed } from "../screens/Feed/Feed";
import { Profile } from "../screens/Profile/Profile";

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
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export { BottomTabs };
