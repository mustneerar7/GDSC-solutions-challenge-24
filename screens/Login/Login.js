import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";

import { auth } from "../../configs/firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Initialize WebBrowser for use with AuthSession
WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "",
    androidClientId:
      "895582229811-hq8noqn6djio57i36lciotdkp52tunra.apps.googleusercontent.com",
  });

  // Hide the header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Handle the Google login response
  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  // Check if the user is already logged in
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("user logged in");
        setUserInfo(user);
      } else {
        console.log("no user");
      }
    });

    return () => unsub();
  }, []);

  // Save the user info to AsyncStorage and navigate to the BottomTabs on login
  React.useEffect(() => {
    if (userInfo) {
      AsyncStorage.setItem("user", JSON.stringify(userInfo));
      navigation.reset({
        index: 0,
        routes: [{ name: "BottomTabs" }],
      });
    }
  }, [userInfo]);

  // Check if the user is already logged in and stop the loading spinner
  React.useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "BottomTabs" }],
        });
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // Presentation
  return (
    <View style={styles.container}>
      {!loading ? (
        <Button title="Login" onPress={() => promptAsync()} />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
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
});

export { Login };
