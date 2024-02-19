import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Exchange } from "../Exchange/Exchange";
import styles from "../../configs/styles";

const Choice = () => {
  const navigation = useNavigation();

  const handleOption1Press = () => {
    navigation.navigate("Exchange"); 
  };

  const handleOption2Press = () => {
    navigation.navigate("BottomTabs"); 
  };

  return (
    <ScrollView contentContainerStyle={inlineStyles.container}>
      <View style={inlineStyles.headerContainer}>
        <Image
          style={inlineStyles.logo}
          source={require("../../assets/barterbox.png")}
        />
        <View style={inlineStyles.headerTextContainer}>
          <Text style={inlineStyles.popularText}>Barter Box</Text>
        </View>
      </View>
      <Text style={inlineStyles.middleText}>I feel like</Text>
      <View style={inlineStyles.buttonContainer}>
        <TouchableOpacity style={inlineStyles.button} onPress={handleOption1Press}>
          <Text style={inlineStyles.buttonText}>Add my items to</Text>
          <Text style={inlineStyles.buttonText}> the listing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={inlineStyles.button} onPress={handleOption2Press}>
          <Text style={inlineStyles.buttonText}>Find the stuff to</Text>
          <Text style={inlineStyles.buttonText}>Exchange</Text>
          <Text style={inlineStyles.buttonText}></Text>
        </TouchableOpacity>
      </View>
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
  logo: {
    width: 64,
    height: 64,
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
  middleText: {
    ...styles.typography.h2,
    marginTop: 200,
    fontSize: 52,
    color: "#865012",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 10,
    color: "black",
    textAlign: "center",
  },
};

export { Choice };
