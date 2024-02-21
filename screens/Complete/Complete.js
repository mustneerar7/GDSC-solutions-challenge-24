import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../configs/styles";

const Complete = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("");
  };

  return (
    <ScrollView contentContainerStyle={inlineStyles.container}>
      <View style={inlineStyles.headerContainer}>
      </View>
      <Text style={inlineStyles.mainText}>Congratulations!</Text>
      <Text style={inlineStyles.productText}>Product Added.</Text>
      <Image
        style={inlineStyles.logo}
        source={require("../../assets/party-popper.png")}
      />
      <TouchableOpacity onPress={handleButtonPress} style={inlineStyles.button}>
        <Text style={inlineStyles.buttonText}> 🔥 Awesome </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const inlineStyles = {
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#F1E0CE",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  popularText: {
    ...styles.typography.h2,
  },
  interestsText: {
    ...styles.typography.h5,
  },
  mainText: {
    ...styles.typography.h2,
    marginTop: 70,
    fontSize: 32,
    color: "#865012",
  },
  productText: {
    ...styles.typography.h2,
    marginTop: 10,
    fontSize: 30,
    color: "#D2B48C",
  },
  logo: {
    marginTop: 70,
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 150,
    paddingVertical: 10,
    paddingHorizontal: 70,
    backgroundColor: "#865012",
    borderRadius: 30,
  },
  buttonText: {
    color: "#D2B48C",
    fontSize: 18,
  },
};

export { Complete };
