import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Dimensions } from "react-native";

import styles from "../../configs/styles";
import { Card } from "./Card";
import { dummyData } from "./dummyData";

const Home = () => {
  return (
      <ScrollView style={[inlineStyles.container]}>
        <View style={inlineStyles.headerContainer}>
          <Image
            style={inlineStyles.logo}
            source={require("../../assets/barterbox.png")}
          />
          <View style={inlineStyles.headerTextContainer}>
            <Text style={inlineStyles.popularText}>Popular</Text>
            <Text style={inlineStyles.interestsText}>Based on your interests</Text>
          </View>
        </View>

        <FlatList
          data={dummyData}
          renderItem={({ item }) => Card(item)}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={Dimensions.get("window").width}
        />

        <TouchableOpacity
          style={[inlineStyles.buttonContainer, inlineStyles.exchangeButton]}
        >
          <Text style={inlineStyles.buttonText}>🔥</Text>
          <Text style={inlineStyles.buttonText}>   Exchange</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[inlineStyles.buttonContainer, inlineStyles.favoritesButton]}
        >
          <Text style={inlineStyles.buttonText}>💖</Text>
          <Text style={inlineStyles.favoritesButtonText}>  Add to favorites</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
  );
};

const inlineStyles = {
  container: {
    paddingTop: 32,
    backgroundColor: "#F1E0CE",
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
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    padding: 16,
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  exchangeButton: {
    backgroundColor: "#865012",
  },
  favoritesButton: {
    backgroundColor: "#F6ECE2",
  },
  buttonText: {
    ...styles.typography.h3,
    color: "white",
  },
  favoritesButtonText: {
    ...styles.typography.h3,
    color: "black",
  },
};

export { Home };
