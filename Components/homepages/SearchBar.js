import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  return ( 
    
    <View style={{ marginTop: 15, flexDirection: "row" }}>
  <GooglePlacesAutocomplete
 //query={{ key: 'AIzaSyBde4AnrUkjBfEz04zpNDXTCpzAf131fBY' }} 
   placeholder="Search"
   requestUrl={
    {
      useOnPlatform:'web',
      url:'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
    }
   }
  
   
    styles={{
      textInput: {
        backgroundColor: "#eee",
        borderRadius: 20,
        marginTop: 7,
        outline: "none",
      },
      textInputContainer: {
        backgroundColor: "#eee",
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      },
    }}
    renderLeftButton={() => (
      <View style={{ marginLeft: 10 }}>
      <AntDesign name="search1" size={24} color="black" />
      </View>
    )}
    renderRightButton={() => (
      <View
        style={{
          flexDirection: "row",
          marginRight: 8,
          backgroundColor: "white",
          padding: 9,
          borderRadius: 30,
          alignItems: "center",
        }}
    
      >
      <AntDesign
      name="clockcircle"
      size={11}
      style={{ marginRight: 6 }}
    />
    
      </View>
        )}
      

    />
    
  
</View>
);
}