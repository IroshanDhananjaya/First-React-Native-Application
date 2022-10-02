import { View, Text, Button } from 'react-native'
import React from 'react'
import LogIN from './screens/LogIN'
import Register from './screens/Register'
import VehicleImg from './screens/VehicleImg'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import Vehicle from './screens/Vehicle';

const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      
       <Stack.Navigator>
          <Stack.Screen name="LogIN" component={LogIN} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Vehicle" component={Vehicle} />
          <Stack.Screen name="VehicleIMG" component={VehicleImg} />
      </Stack.Navigator>
    </NavigationContainer>
    
   
  )
}