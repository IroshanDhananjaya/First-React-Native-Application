import { View, Text, Button } from 'react-native'
import React from 'react'
import LogIN from './screens/LogIN'
import Register from './screens/Register'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="LogIN" component={LogIN} />
          <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    

  )
}