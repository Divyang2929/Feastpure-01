import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const dimensions = Dimensions;
const imageH = Math.round((dimensions.width * 8) / 10);
const imageW = dimensions.width;

export default function Cards (props,{navigation}) {
  const { Name, image, Rating } = props.route.params;

  return (
    <View>
      <AntDesign
        name="leftcircle"
        size={24}
        color="#22926D"
        style={{
          marginLeft: 17.5,
          marginTop: 40,
          height: 30,
          width: 30,
        }}
        onPress={() => navigation.navigate("Main")}
      />

      <View>
        <View
          /*style={{
            border: "10",
            marginTop: 10,
            flex: 1,
            width: imageW,
            height: imageH,
            marginRight: 20,
            marginLeft: 20,
          }}*/
        >
          <View>
            <View
              style={{
                flex: 1,
                paddingLeft: 11,
                paddingRight: 11,
                paddingTop: 11,
              }}
            >
              <Restaurant_IMage image={image} />
            </View>
            <View
            style={{
              flexDirection: "row",
              width: 275,
              height: 45,
              marginTop: 12,
              marginBottom: 31,
            }}
          >
    
              <View>    
              <Restaurant_NAme Name={Name} />
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Owened by Tony Strak
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Malviya naagar
              </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#22926D",
                  marginRight: 10,
                  height: 17,
                  width: 39,
                }}
              >
                <Restaurant_Rating Rating={Rating} />
              </View>
              <View style={{ marginTop: 12 }}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Entypo
                    name="heart-outlined"
                    size={24}
                    color="black"
                    onClick={() => setcolor("blue")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const Restaurant_IMage = (props) => (
  <Image
    style={{
      height: 132,
      width: "100%",
      borderRadius: 10,
    }}
    source={{
      uri: props.image,
    }}
  />
);
const Restaurant_NAme = (props) => (
  <View style={{ paddingLeft: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: "600" }}>{props.Name}</Text>
  </View>
);

const Restaurant_Rating = (props) => (
  <Text
    style={{
      color: "#fff",
      fontSize: 12,
      fontWeight: "700",
      height: 12,
      width: 21,
    }}
  >
    {" "}
    {props.Rating}{" "}
  </Text>
);