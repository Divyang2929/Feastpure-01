import React from "react";
import { Text, View, ScrollView } from "react-native";
import Banner from "../homepages/Banner";
import SearchBar from "../homepages/SearchBar";
import Car from "../homepages/Car";
import Head from "../homepages/Head";
import FoodItems from "../homepages/FoodItems";
import Look from "../homepages/Look";


export default function Home({ navigation }) {
  return (
    <ScrollView>
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

        <Head />
        <Look />
        
        <FoodItems navigation={navigation} />
    
    </View>
    </ScrollView>
  );


}
