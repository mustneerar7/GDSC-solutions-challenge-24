// Desc: This file contains the styles for the application
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1E0CE",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  typography: {
    h1: {
      fontSize: 42,
      fontFamily: "Outfit-Medium",
      padding: 8,
    },
    h2: {
      fontSize: 18,
      fontFamily: "Outfit-Bold",
    },
    h3: {
      fontSize: 16,
      fontFamily: "Outfit-Medium",
    },
    h4: {
      fontSize: 14,
      fontFamily: "Outfit-Regular",
    },
    h5: {
      fontSize: 12,
      fontFamily: "Outfit-SemiBold",
    },
    h6: {
      fontSize: 10,
      fontFamily: "Outfit-SemiBold",
    },
  },

  buttons: {
    large: {
      backgroundColor: "#865012",
      padding: 16,
      borderRadius: 30,
      width: "80%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    small: {
      backgroundColor: "#FFA987",
      padding: 5,
      borderRadius: 5,
      width: 100,
      alignItems: "center",
    },
  },
});
