import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Banner extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#2E8D57",
              height: 90,
              width: 300,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 45,
                fontStyle: "italic",
                color: "#fff",
              }}
            >
            
              feastpure
            </Text>
            <View>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  left: 70,
                  top: 12,
                }}
                source={require("../Image/Feasty.png")}
              />
            </View>
          </View>
        </View>
        <View>
          <GooglePlacesAutocomplete
            query={{ key: "AIzaSyBde4AnrUkjBfEz04zpNDXTCpzAf131fBY" }}
            placeholder="Your location"
            textInputProps={{
              placeholderTextColor: "#fff",
            }}
            
            styles={{
              textInput: {
                backgroundColor: "#2E8D57",
                color: "#fff",
                //borderColor:"#2E8D57",
                borderWidth: 0,
                padding: 0,
                marginTop: 7,
                outline: "none",
                fontWeight:'600',
                borderBottomColor: "#fff",
              },
              container: {
                backgroundColor: "#2E8D57",
              },
            }}
            renderLeftButton={() => (
              <View style={{ marginTop: 4 }}>
                <EvilIcons
                  name="location"
                  size={24}
                  color="white"
                  style={{ marginLeft: 15, marginTop: 15 }}
                />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
