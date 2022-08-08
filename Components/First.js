import React, { Component } from "react"; 
import { View, Text, Image ,StyleSheet } from "react-native";
import { Button} from "react-native-paper";

const Separator = () => (
  <View style={styles.separator} />
);

const Login = ({navigation}) => {
  return(
      <View style={{flex:1}}>
      <View style={{
      backgroundColor:'#2E8B57',
      borderBottomEndRadius:400,
     
      }}>
    
      <Image style={{
        height:250,
        paddingtop:90,
        width:250,
        margin:120,
        marginHorizontal:40,
      }}
      source={require('./Image/Feasty.png')} 
       />
    <Separator/>
      <View style={{flex:1,backgroundColor:'white',      
      }}>
      
        <Button  style={{
              height: 60,
              width:350,
              margin:10,
              marginStart:30,
              marginTop:20,
              borderWidth: 1,
              borderColor:"#20232a",
              backgroundColor:'white',  
              borderRadius:20,
              padding:10,
            }}
            
            onPress={()=> navigation.navigate("OTP")}
            >
            Login
              
            </Button>

            <Button  style={{
              height: 60,
              width:350,
              margin:10,
              marginStart:30,
              marginTop:20,
              borderWidth: 1,
              borderColor:"#20232a",
              backgroundColor:'white',
              borderRadius:20,
              padding:10,
            }}
            
            onPress={()=> navigation.navigate("Register")}
            
            >
            Register
              
            </Button>


      
      </View>
    </View>
    </View>
  );
};
    
const styles = StyleSheet.create({
  separator: {
    marginVertical:15,
  
  },
});

export default Login;
