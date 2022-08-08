import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const Fodie = [
  {
    image_url:
      "https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg",
    name: "Saitama punch",
    dishName: "Pizza",
    rating: "  3 ⭐",
    price: "180",
  },
  {
    image_url:
      "https://c.ndtvimg.com/2020-04/0830h4j_burger_625x300_22_April_20.jpg",
    name: "one piece",
    dishName: "Burger",
    rating: "  5 ⭐",
    price: "50",
  },

  {
    image_url:
    "https://www.foodieist.com/wp-content/uploads/2020/12/veg-momos-recipe-672x372.jpg",
    name: "captain KV",
    dishName: "Momos",
    rating: " 4 ⭐",
    price: "80",
  },
];

const momo = () => console.log("item added to the cart");
export default function FoodItems( {navigation} ) {

  const [title, settitle]=  useState("Add To Cart");
 function changeTitle() {
     settitle("");
  }
  return (
   
    <View>
      <Text
        style={{
          fontSize: 21,
          marginBottom:5,
        }}
      >
        {" "}
        All Restaurant In Location{" "}
      </Text>
      {Fodie.map((Fodie, index) => (
        <View  key={index}>
      <TouchableOpacity 
      activeOpacity={0.5} 
     
      onPress={()=> navigation.navigate ("ItemAbout",{
       Name : Fodie.name,
       image : Fodie.image_url,
       Rating : Fodie.rating,
      
      }) } >

     
       
        <View style={{ marginTop:17, padding:8,}}>
          <View style={{flexDirection:"row", }}>
            <View>
              <RestaurantImage Fodies={Fodie} />
                   </View>
                   
              <View >
                
                <RestaurantInfo Fodies={Fodie} />
 
                <Button
                title="Add"
                  onPress={() => {
                    changeTitle()
                  }}
                  color="#22926D"
                />
                </View>
            </View>
            <View style={{ borderBottomColor: 'black',
            borderBottomWidth: 1,}}>
            
            </View>
            <View style={{marginTop:10,}}>
            <RestaurantName Fodies={Fodie} />
            </View>
          </View>
          </TouchableOpacity>
          </View>
          

      ))}

    </View>
  );
}
const RestaurantImage = (props) => (
  <View>
    <Image
      source={{ uri: props.Fodies.image_url }}
      style={{
        width: 150,
        height: 90,
        borderRadius:10,
        marginRight:15,
      }}
    />
    
  </View>
);
const RestaurantName=(props) =>(
  <View>
  <View>
      <Text
        style={{
        
          color: " #22926D",
          fontSize: 17,
      
          fontWeight:'600',
          fontSize: 18,
          fontFamily: "Inter",
          
          
        }}
      >
        {props.Fodies.name}
      </Text>
    </View>
    </View>

);

const RestaurantInfo = (props) => (
  <View
    style={{
      
    }}
  >
    <Text
      style={{
        fontSize: 14,
        
        
        fontFamily: "Inter",
      }}
    >
      {" "}
      {props.Fodies.dishName}{" "}
    </Text>
    <Text style={{  }}> {props.Fodies.rating} </Text>
    <Text style={{ color: "#22926D" }}>
      {props.Fodies.price}{" "}
    </Text>
  </View>
);
/*

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 21,
            }}
          >
            {" "}
            All Restaurant In Location{" "}
          </Text>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Image
              source={{
                uri: "https://www.foodieist.com/wp-content/uploads/2020/12/veg-momos-recipe-672x372.jpg",
              }}
              style={{
                width: 180,
                height: 90,
                left: 20,
              }}
            />
            <TouchableOpacity>
            <Text
              style={styles.contain}
            >
              The stark chop{" "}
            </Text>
            </TouchableOpacity>

          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 50,
              position: "relative",
            }}
          >
            Momos
          </Text>
          <Text>⭐⭐⭐⭐</Text>
          <Text>Rs.60 (6 Pcs)</Text>
          <Button
            onPress={() => {
              console.log("You tapped the button!");
            }}
            title="Add To Cart"
          />
        </View>
      </View>
    
 const styles= StyleSheet.create({
  contain:{

  marginLeft: 10,
  fontSize: 17,
  marginTop: 12,
  }
 }) */
