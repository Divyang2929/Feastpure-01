import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
const items = [
    {
      image: require("../Image/1.png"),
      text: "Pick-up",
    },
    {
      image: require("../Image/2.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../Image/3.png"),
      text: "Bakery Items",
    },
    {
      image: require("../Image/4.png"),
      text: "Fast Foods",
    },
    {
      image: require("../Image/5.png"),
      text: "Deals",
    },
    
  ]

  export default function Head () {
    return (
      <View
        /*style={{
          marginTop: 5,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingLeft: 20,
        }}*/
        
        
      >
      <Text style={{
        marginTop:5,
        fontSize:30,
        paddingBottom:15,
      }}> Popular Cousine </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
          {items.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode:'stretch',
                }}
              />
              <Text style={{ fontSize: 13, fontWeight:'900' }}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
