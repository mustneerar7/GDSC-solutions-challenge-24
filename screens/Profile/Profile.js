import React from "react";
import { Text, Image } from "react-native";

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "../../configs/firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  // Get the user info from AsyncStorage
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        setCurrentUser(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Get the user info on component mount
  React.useEffect(() => {
    getUser();
  }, []);

  // Handle the logout action
  const handleLogout = async () => {
    AsyncStorage.removeItem("user");
    await signOut(auth);
    console.log("User signed out");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  // Presentation
  return (
    <View style={styles.container}>
      {currentUser && (
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 20,
          }}
          source={{ uri: currentUser ? currentUser.photoURL : null }}
        />
      )}
      <Text style={styles.headline}>
        {currentUser ? currentUser.displayName : "No user info"}
      </Text>
      <Text style={styles.body}>
        {currentUser ? currentUser.email : "No user info"}
      </Text>
      <Button title="Logout" onPress={handleLogout} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
  },
  body: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
});

export { Profile };
