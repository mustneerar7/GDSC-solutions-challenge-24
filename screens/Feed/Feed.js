import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";

const Feed = () => {
  return (
    <View style={searchStyles.container}>
      <View style={[{
        width: "90%",
        padding: 16,
        backgroundColor: "#F6ECE2",
        borderRadius: 30,
        marginBottom: 20,
        fontFamily: "Outfit-Bold",
      }]}>
        <TextInput placeholder="Search for your dream product" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1E0CE",
    alignItems: "center",
    paddingTop: 60,
  },
});

export { Feed };

