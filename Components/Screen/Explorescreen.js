import React from "react";
import { View,Text } from "react-native";

export default function Explorescreen ({navigation}) {
    return (
        <View style={{flex:1,alignItem:'center',justifyContent:'center'}}>
        <Text 
        onPress={() => navigation.navigate('Home')}
        style={{fontSize:30,fontWeight:'bold'}} >Explore Screen</Text>
        </View>
    );


}