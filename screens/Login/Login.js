import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";

import { auth } from "../../configs/firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../../configs/styles";

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

  const fadeInAnim = React.useRef(new Animated.Value(0)).current;

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
        routes: [{ name: "Choice" }],
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
          routes: [{ name: "Choice" }],
        });
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // Animation configuration
  React.useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 500,
    }).start();
  }, [fadeInAnim]);

  // Presentation
  return (
    <Animated.View style={[styles.container, { opacity: fadeInAnim }]}>
      <Animated.Text style={[styles.typography.h1, { opacity: fadeInAnim }]}>
        Swap, Replace & Reduce waste
      </Animated.Text>

      <Animated.View
        style={{
          alignItems: "center",
          opacity: fadeInAnim,
        }}
      >
        <Animated.Image
          style={{
            width: 160,
            height: 160,
            opacity: fadeInAnim,
          }}
          source={require("../../assets/barterbox.png")}
        />

        <Animated.Text style={[styles.typography.h2, { opacity: fadeInAnim }]}>
          Barter box
        </Animated.Text>
      </Animated.View>

      <Animated.Text style={[styles.typography.h4, { opacity: fadeInAnim }]}>
        Signin or login with Google to start bartering
      </Animated.Text>

      {!loading ? (
        <Animated.View
          style={[styles.buttons.large, { opacity: fadeInAnim }]}
        >
          <Pressable
            title="Login"
            style={styles.buttons.large}
            onPress={() => promptAsync()}
          >
            <Animated.Image
              source={require("../../assets/google_logo.png")}
              style={{
                width: 24,
                height: 24,
                marginRight: 8,
                opacity: fadeInAnim,
              }}
            />
            <Animated.Text
              style={[
                styles.typography.h3,
                { color: "white", opacity: fadeInAnim },
              ]}
            >
              Login with Google
            </Animated.Text>
          </Pressable>
        </Animated.View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      <StatusBar style="auto" />
    </Animated.View>
  );
};

export { Login };
