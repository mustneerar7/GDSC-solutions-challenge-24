import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1E0CE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Feed };
