import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import styles from "../../configs/styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export { Home };

