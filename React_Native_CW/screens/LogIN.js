import { View, Text, Button,StyleSheet,TouchableOpacity, Alert} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack  } from "native-base";

import React, { useState } from 'react'
import { openCamera } from 'react-native-image-crop-picker';



export default function LogIN({ navigation }) {

  const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[userID,setUserId]=useState('');
const[post,setPosts]=useState('');





    return (
      <NativeBaseProvider  style={styles.container}>
        <Box  style={styles.box}>
        

        <Stack space={4} w="90%" style={styles.stackContainer}>
        <Text  style={styles.text1}> LOGIN </Text>
              <Input variant="underlined" w="90%"  type='email' placeholder="Email" style={styles.input1} onChangeText={(e) => {setEmail(e)}}/>
              <Input variant="underlined" w="90%" type='password' placeholder="Password" style={styles.input2} onChangeText={(e) => {setPassword(e)}}/>

              <TouchableOpacity style={styles.btn} onPress={()=>{
                  fetch('http://192.168.1.132:4000/user/login', {
                    method: 'PUT',
                    body: JSON.stringify({
                      password: password,
                      email: email
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  })
                    .then((response) => response.json())
                    .then((json) => setPosts(json));


                    if(post.length==0){
                      console.log("No data")
                      Alert.alert("Invalid User Name or Password !")
                      
                    }else{
                      setUserId(post.user_id)
                     
                      for (const a of post) {
                        setUserId(a.user_id) 
                        if(userID!=""){
                            navigation.navigate("HomePage" ,{userID})
                        }else{
                          Alert.alert("Something Wrong try again !")
                        }
                       
                      }
                     
                    
                      console.log(userID)
                    }
                      
                    
                   
              }}>
                  <Text style={{color:'#ffff',fontSize:20}}> Login </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={()=>{navigation.navigate("Register")}}>
                  <Text  style={{color:'black',fontSize:20,fontWeight:"bold"}}> Register Here </Text>
              </TouchableOpacity>
          </Stack>
        </Box>
           
      </NativeBaseProvider >
  
    )
  }

  const styles = StyleSheet.create({
  
    box:{
      position:"relative",
      borderColor:"black",
      backgroundColor:"#ffffff",
      height:"100%",
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    stackContainer:{
      position:"relative",
      height:"50%",
      color:"black",
       
      backgroundColor:"#ffffff",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    text1:{

      top:"0%",
      color:"black",
      fontSize:60
    },
    btn:{
      width:'60%',
      padding:5,
      backgroundColor:"blue",
      height:50,
      alignItems:'center',
      justifyContent:'center',
      top:"10%",
      borderRadius:100
    },
    btn2:{
      width:'60%',
      padding:1,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      top:"10%",
      borderRadius:100
    },
    input1:{
      width:"30%",
      
    },
    input2:{
      width:"35%",
    }
})