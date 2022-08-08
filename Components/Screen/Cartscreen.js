/*import React from "react";
import { View,Text } from "react-native";

export default function Cartscreen ({navigation}) {
    return (
        <View style={{flex:1,alignItem:'center',justifyContent:'center'}}>
        <Text 
        onPress={() => navigation.navigate('Home')}
        style={{fontSize:30,fontWeight:'bold'}} >Cart Screen</Text>
        </View>
    );


}
*/
import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 




export default function Cart(){
    return(
<View>       
        <AntDesign name="leftcircle" size={24} color="#22926D"style={{
        marginLeft:17.5,
        marginTop:40,
        height:30,
        width:30,


        }} />
        <View style = {{
            borderWidth: 0.5,
        borderColor:'#BDBDBD',
        marginTop:18,
        }}></View>
        <Text style={{
            marginTop:20,
            fontSize:20,
            fontWeight:"600",
            marginLeft:20,
            
        }}>Your Order</Text>
         <View>
         
         
         
         
         
         </View>



        
   

      
       
        
        </View>
    );
}

