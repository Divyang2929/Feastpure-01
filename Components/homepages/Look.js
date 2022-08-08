import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  StatusBar,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const data = [
  "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=",
  "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg",
  "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw=",
];

const imageW = width * 0.7;
const imageH = height * 0.2;
export default class extends Component {
  render() {
    return (
      <View
        style={{
          margin: 0,
          padding: 12,
        }}
      >
        <StatusBar hidden />
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginRight: 12,
                }}
              >
                <Image
                  source={{ uri: item }}
                  style={{
                    borderRadius: 20,
                    width: imageW,
                    height: imageH,
                    resizeMode: "cover",
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}
