import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const Onboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Get started"
        onPress={() => navigation.navigate("Login")}
      />
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

export { Onboard };
