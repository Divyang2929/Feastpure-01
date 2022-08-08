import React,{ Component} from "react";
import {TextInput,StyleSheet, View,Text,Image,SafeAreaView,Alert } from "react-native";
import {Button,} from  "react-native-paper";

  const OTP = ({navigation}) =>{ 
      return(
        <View style={{flex:1,backgroundColor:'#2E8B57',}}>
        <View style={{backgroundColor:'#50C878',
        borderBottomEndRadius:400,
        borderBottomStartRadius:0,
        
        }}>
        
        <Image style={{
          height:200,
          width:200,
          margin:120,
          marginLeft:100}}
          source={require('./Image/boy.png')}
        />

        <Text style={{
          paddingHorizontal:30,
          marginTop:-30,
          marginBottom:20,
          fontWeight:"800",
          color:"white",
          fontSize:40,
          fontStyle:"normal"
          }}>Login
          </Text>
          </View>
          
          
          <View  style={{ flex:1,backgroundColor:'#2E8B57'
          
          }}>
          <SafeAreaView>
            <TextInput style={{
              height: 50,
              marginStart:30,
              margin:10,
              width:350,
              marginTop:70,
              borderWidth: 1,
              backgroundColor:'',
              borderColor:"#20232a",
              fontWeight:"500",
              borderRadius:20,
              padding:10,}}
              placeholder="Mobile Number"
              keyboardType="numeric"
              Value={Number}
              maxLength={10}
            />
            

            <Button  style={{
              height: 60,
              width:350,
              margin:10,
              marginStart:30,
              marginTop:20,
              borderWidth: 1,
              borderColor:"#20232a",
              backgroundColor:'#FDDA0D',
              borderRadius:20,
              padding:10,
            }}
          
            onPress={()=> navigation.navigate("Home")}
            >
            Continue
              
            </Button>             
          </SafeAreaView>
          </View>
          </View>
          
      );
    }
  

export default OTP;

