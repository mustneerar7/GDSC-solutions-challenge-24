import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../configs/styles";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const Exchange = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
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
      <Text style={inlineStyles.mainText}>What to exchange?</Text>
      <View style={inlineStyles.buttonContainer}>
        <TouchableOpacity style={inlineStyles.button1}>
          <TextInput style={inlineStyles.buttonText} placeholder="Title" />
        </TouchableOpacity>
        {!image ? (
          <TouchableOpacity style={inlineStyles.button2} onPress={pickImage}>
            <Text style={inlineStyles.buttonText}>Add a picture</Text>
          </TouchableOpacity>
        ) : (
          <Image source={{ uri: image }} style={[inlineStyles.button2, { height: 300, }]} />
        )}
        <TouchableOpacity style={inlineStyles.button3}>
          <Text style={inlineStyles.buttonText}>Describe your product..</Text>
        </TouchableOpacity>
        <Text style={inlineStyles.rateText}>Rate your Item..</Text>
        <Text style={inlineStyles.buttonText}>⭐⭐⭐⭐⭐</Text>
        <TouchableOpacity style={inlineStyles.button4}>
          <Text style={inlineStyles.buttonText}>🔥Add for exchange</Text>
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
  mainText: {
    ...styles.typography.h2,
    marginTop: 30,
    fontSize: 42,
    color: "#865012",
  },
  rateText: {
    ...styles.typography.h2,
    marginTop: 5,
    marginLeft: 20,
    fontSize: 15,
    color: "#865012",
  },

  buttonContainer: {
    flexDirection: "column",
    marginTop: 20,
  },
  button1: {
    backgroundColor: "white",
    fontsize: 15,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: "white",
    paddingVertical: 70,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  button3: {
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  button4: {
    backgroundColor: "#865012",
    fontsize: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
};

export { Exchange };
