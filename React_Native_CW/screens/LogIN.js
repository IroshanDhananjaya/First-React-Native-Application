import { View, Text, Button,StyleSheet,NativeBaseProvider} from 'react-native'
import React from 'react'

export default function LogIN() {
    return (
      <NativeBaseProvider>
        <Text>Hello</Text>
      </NativeBaseProvider>
  
    )
  }

  const styles = StyleSheet.create({
    text:{
        color:'red'
    },
    btn:{

    }
});