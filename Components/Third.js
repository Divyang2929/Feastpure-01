import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView,Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Register = ({navigation}) => {

return(
  <SafeAreaView>
    <View style={{ backgroundColor:"black"}}>
      <Text
        style={{
          fontSize: 30,
          color: "#fff",
          marginBottom: 10,
        }}
      >
        Name
      </Text>

      <TextInput
        style={{
          marginTop: 10,
          width: 600,
          borderRadius: 20,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          marginBottom: 20,
          borderColor: "#fff",
        }}
        label={"Name"}
        keyboardType={"Name"}
      ></TextInput>
      <Text
        style={{
          fontSize: 30,
          color: "#fff",
          marginBottom: 10,
        }}
      >
        Mobile Number
      </Text>

      <TextInput
        style={{
          marginTop: 10,
          width: 600,
          borderRadius: 20,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}
        label={"Mobile Number"}
        keyboardType={"number-pad"}
        maxLength={10}
      ></TextInput>
      <Button
        style={{
          marginTop: 100,
          marginLeft: 40,

          backgroundColor: "#454B1B",
          maxWidth: 400,
          borderRadius: 10,
        }}
        mode="contained"

        onPress={()=> navigation.navigate("Home")}
      >
        Register
      </Button>
    </View>
    </SafeAreaView>
  );
    }

export default Register;