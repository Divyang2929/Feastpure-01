import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Searh() {
    return(
        <View style={{ marginTop:70,marginLeft:10 }}>
            <GooglePlacesAutocomplete placeholder="Search"
              styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 10,
            fontWeight: "700",
            marginTop: 7
            
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
    
          }
              }}
            
            />
        </View>
    );
}