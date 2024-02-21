import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";

import { Dimensions } from "react-native";

import { useEffect } from "react";
import styles from "../../configs/styles";
import { Card } from "./Card";

const dummyData = [
  {
    id: 1,
    title: "First Item",
    rating: 5,
    description: "This is the first item",
    postedBy: "John Doe",
  }, 
  {
    id: 2,
    title: "Second Item",
    rating: 4,
    description: "This is the second item",
    postedBy: "Jane Doe",
  }, 
  {
    id: 3,
    title: "Third Item",
    rating: 3,
    description: "This is the third item",
    postedBy: "John Doe",
  },
  {
    id: 4,
    title: "Fourth Item",
    rating: 2,
    description: "This is the fourth item",
    postedBy: "Jane Doe",
  },
];


const Home = ({ navigation }) => {
  const [response, setResponse] = useState([]);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://192.168.100.89:4000/api/v1/listing/getAll"
      );
      await response.json().then((data) => {
        setResponse(data);
      });
    };
    fetchData();
  }, []);

  // if response, copy data.listings to listings
  useEffect(() => {
    
    if (response?.listings) {
      setListings(response?.listings);
    }
  }, [response]);

  useEffect(() => {
    if (listings) {
      console.log("Listings", listings);
    }
  }, [listings]);

  const onPressCallback = (item) => {
    navigation.navigate("ProductDetails");
  };

  return (
    <ScrollView style={[inlineStyles.container]}>
      <View style={inlineStyles.headerContainer}>
        <Image
          style={inlineStyles.logo}
          source={require("../../assets/barterbox.png")}
        />
        <View style={inlineStyles.headerTextContainer}>
          <Text style={inlineStyles.popularText}>Popular</Text>
          <Text style={inlineStyles.interestsText}>
            Based on your interests
          </Text>
        </View>
      </View>

          {response?.listings && <FlatList
            data={response.listings}
            renderItem={({ item }) => Card(item, onPressCallback)}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get("window").width}
          />}

      {/* <TouchableOpacity
        style={[inlineStyles.buttonContainer, inlineStyles.exchangeButton]}
      >
        <Text style={inlineStyles.buttonText}>🔥</Text>
        <Text style={inlineStyles.buttonText}> Exchange</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
      onPress={()=>
        ToastAndroid.show("Added to favorites", ToastAndroid.SHORT)
      }
        style={[inlineStyles.buttonContainer, inlineStyles.favoritesButton]}
      >
        <Text style={inlineStyles.buttonText}>💖</Text>
        <Text style={inlineStyles.favoritesButtonText}> Add to favorites</Text>
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

