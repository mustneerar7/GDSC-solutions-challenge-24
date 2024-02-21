import React from "react";
import { ImageBackground, Text, View, Dimensions, Pressable } from "react-native";

import styles from "../../configs/styles";

const Card = (item, onPressCall) => {
  return (
    <Pressable
      onPress={()=>onPressCall(item)}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 1.48,
        padding: 16,
      }}
    >
      <ImageBackground
        borderRadius={30}
        source={{
          uri: "https://th.bing.com/th/id/R.b915a29a8b558ee8c37d8534f1fa1fd8?rik=AzYKXeHo%2bAl4Qg&pid=ImgRaw&r=0",
        }}
        style={{
          margin: 8,
          padding: 16,
          height: "100%",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 94,
            left: 16,
            width: "100%",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={[styles.typography.h2, { color: "white" }]}>
              {item.title}
            </Text>
            {/* <Text style={[styles.typography.h2, { color: "white" }]}>
              {item.rating} / 5
            </Text> */}
          </View>
          <Text style={[styles.typography.body, { color: "white" }]}>
            {item.postedBy}
          </Text>
          <Text style={[styles.typography.body, { color: "white" }]}>
            {item.description}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export { Card };
