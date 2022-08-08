import React from "react";
import { Text, View, ScrollView } from "react-native";
import Banner from "../homePages/Banner";
import SearchBar from "../homePages/SearchBar";
import Car from "../homePages/Car";
import Head from "../homePages/Head";
import FoodItems from "../homePages/FoodItems";
import Cars from "../homepages/Look";

export default function Home({ navigation }) {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#2E8D57",
          borderBottomEndRadius: 250,
          borderBottomStartRadius: 250,
        }}
      >
        <Banner />
        <SearchBar />

        <Car />
      </View> 
      <ScrollView>

    
        <Head />
        <Cars />
        <FoodItems navigation={navigation} />
    </ScrollView> 
    </View>
  );
}
