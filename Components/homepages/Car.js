import React, { Component } from "react";
import { Text, View, Image, ScrollView, Dimensions } from "react-native";

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 20);
const imageWidth = dimensions.width;

const items = [
  {
    image: require("../Image/Mb3.png"),
  },
  {
    image: require("../Image/Mb4.png"),
  },
  {
    image: require("../Image/Mb5.png"),
  },
];

export default function Car() {
  return (
    <View
      style={{
        marginTop: 15,
          
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems:'flex-start'}}>
            <Image
              source={item.image}
              style={{
                height: imageHeight,
                width: imageWidth,

                borderRadius: 8,
                resizeMode: "contain",
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
