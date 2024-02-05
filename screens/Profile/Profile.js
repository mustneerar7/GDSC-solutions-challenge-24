import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Onboard" }],
          })
        }
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

export { Profile };
