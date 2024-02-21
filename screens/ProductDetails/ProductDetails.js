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

const ProductDetails = ({navigation}) => {
  return (
      <ScrollView style={[inlineStyles.container]}>
         <FlatList
          data={dummyData}
          renderItem={({ item }) => Card(item)}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={Dimensions.get("window").width}
        />

         <Text style={inlineStyles.details}>
         With amazing quality guitar that transcends and speaks to the soul.
         Used a little on some of the concerts.With high pitch and good quality
         it gonna be your friend.
         </Text>

        <TouchableOpacity
         onPress={() => navigation.navigate("Complete")}
          style={[inlineStyles.buttonContainer, inlineStyles.exchangeButton]}
        >
          <Text style={inlineStyles.buttonText}>🔥</Text>
          <Text style={inlineStyles.buttonText}>   Exchange</Text>
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
  headerTextContainer: {
    marginLeft: 10,
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    padding: 16,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  exchangeButton: {
    backgroundColor: "#865012",
  },

  buttonText: {
    ...styles.typography.h3,
    color: "white",
  },
  details: {
    ...styles.typography.body, 
    marginVertical: 10,
    marginHorizontal: 20,
    color:"#D2B48C",
  },

};

export { ProductDetails };
