import React from "react";
import { View,Text } from "react-native";

export default function Profilescreen ({navigation}) {
    return (
        <View style={{flex:1,alignItem:'center',justifyContent:'center'}}>
        <Text 
        onPress={() => navigation.navigate('Home')}
        style={{fontSize:30,fontWeight:'bold'}}>Profile Screen</Text>
        </View>
    );


}