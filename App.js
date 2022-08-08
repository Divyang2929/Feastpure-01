import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Components/Screen/Main';
import Login from './Components/First';
import OTP from './Components/Second';
import Register from './Components/Third';
import ItemAbout from './Components/screens/ItemAbout';

const Stack = createNativeStackNavigator();
const Mystack =()=> {
const screenOption ={headerShown:false};
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={screenOption}>
        <Stack.Screen 
        name='Login'
        component={Login}/>

        <Stack.Screen
        name='OTP'
        component={OTP}/>

      <Stack.Screen
        name='Register'
        component={Register}/>

        <Stack.Screen
          name='Home'
          component={Main}/>
        
        <Stack.Screen
          name='ItemAbout'
          component={ItemAbout}/>
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Mystack;