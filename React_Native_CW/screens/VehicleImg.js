import { View, Text, Button,StyleSheet,TouchableOpacity,Image, ImageBackground} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack,ScrollView,HStack, TextArea, VStack, KeyboardAvoidingView } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default function Vehicle({route}) {

    const [imgUri,setImgUri]=useState('');
    const [imgUri2,setImgUri2]=useState('');
    const [imgUri3,setImgUri3]=useState('');
    const [imgUri4,setImgUri4]=useState('');

     const[dataSet,setDataSet]=useState('')
    const saveVehicle = async () => {
        try {
          const response = await fetch('http://192.168.1.132:4000/vehicle/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({dataSet}),
          });
          const json = await response.json();
          alert(json.message)
        } catch (error) {
          console.error(error);
        }

        console.log(dataSet)
      }

    useEffect(() => {
        setDataSet(route.params.VehicleData)
       
    })

    const openCamera=()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImgUri(image.path)
          });
    }

    const openGallery=(method)=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
           // setImgUri(image.path)
            method(image.path)
          });
        
    }
     return( 
        <NativeBaseProvider>

            <Stack style={styles.stack} space={1} flx w="90%" justifyContent="center">
                 <HStack w="90%" space={3} justifyContent="center">
                    <ImageBackground
                        source={{uri:imgUri}}
                        style={{height:160,width:150,borderWidth:2,borderColor:"black"}}
                    />
                    <TouchableOpacity  style={styles.btn} title='Open Camera'   onPress={()=>{
                        openGallery(setImgUri)
                    }}>
                        <Text style={{color:"#ffffff"}}> Select Image 1 </Text>
                    </TouchableOpacity>
                </HStack>

                <HStack w="90%" space={3} justifyContent="center">
                    <ImageBackground
                        source={{uri:imgUri2}}
                        style={{height:160,width:150,borderWidth:2,borderColor:"black"}}
                    />
                    <TouchableOpacity  style={styles.btn} title='Open Camera'   onPress={()=>{
                        openGallery(setImgUri2)
                    }}>
                        <Text style={{color:"#ffffff"}}> Select Image 2 </Text>
                    </TouchableOpacity>
                </HStack>

                
                <HStack w="90%" space={3} justifyContent="center">
                    <ImageBackground
                        source={{uri:imgUri3}}
                        style={{height:160,width:150,borderWidth:2,borderColor:"black"}}
                    />
                    <TouchableOpacity  style={styles.btn} title='Open Camera'   onPress={()=>{
                         openGallery(setImgUri3)
                    }}>
                        <Text style={{color:"#ffffff"}}> Select Image 2 </Text>
                    </TouchableOpacity>
                </HStack>

                
                <HStack w="90%" space={3} justifyContent="center">
                    <ImageBackground
                        source={{uri:imgUri4}}
                        style={{height:160,width:150,borderWidth:2,borderColor:"black"}}
                    />
                    <TouchableOpacity  style={styles.btn} title='Open Camera'   onPress={()=>{
                         openGallery(setImgUri4)
                    }}>
                        <Text style={{color:"#ffffff"}}> Select Image 2 </Text>
                    </TouchableOpacity>
                </HStack>

                <TouchableOpacity style={styles.btn2}>
                    <Text style={{color:"#ffffff"}} onPress={saveVehicle}> Save Vehicle </Text>
                </TouchableOpacity>
            </Stack>


          
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
  
    box:{
      position:"relative",
      borderColor:"black",
      backgroundColor:"#ffffff",
      height:"100%",
      width:"100%",
     
    },
    stack:{
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      top:"0%",
      marginBottom:10
    },
   
    ScrollView:{
      position:"relative",
      color:"black",
      backgroundColor:"#ffffff",
      height:"100%"
      
    },
    header:{
  
      top:"1%",
      color:"black",
      fontSize:30,
      marginBottom:10,
      left:"5%"
    },
  
  
    text1:{
  
      top:"0%",
      color:"black",
      fontSize:60
    },
    btn:{
    
      width:'40%',
      padding:5,
      backgroundColor:"blue",
      height:50,
      alignItems:'center',
      justifyContent:'center',
      
      
      borderRadius:100
    },
    btn2:{
      position:"absolute",
      width:'40%',
      padding:5,
      backgroundColor:"green",
      height:50,
      alignItems:'center',
      justifyContent:'center',
      top:"90%",
      left:"57%",
      borderRadius:100
    },
    input1:{
      width:"30%",
      
    },
    input2:{
      width:"35%",
    }
  })