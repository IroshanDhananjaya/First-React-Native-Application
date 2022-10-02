import { View, Text, Button,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack,ScrollView,HStack, TextArea, VStack, KeyboardAvoidingView } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react';

export default function Vehicle({ navigation }) {

    const [imgUri,setImgUri]=useState('');

    const openCamera=()=>{
        let option={
            storageOptions:{
                path : 'images',
                mediaType:'photo',
            },
            includeBase64:true,
        };
        launchCamera(option, response=>{
            console.log('Response = ',response);
            if(response.didCancel){
                console.log('User Cancelled image picker');
            }else if (response.error){
                console.log('ImagePicker Error : '.response.error);
            }else if (response.customButton){
                console.log('User tapped custom button', response.customButton)
            }else{
                const source = {uri : 'data:image/jpeg;base64'+response.base64};
                setImgUri(source.uri);
            }
        });
    }

    openGallery=()=>{
        let option={
            storageOptions:{
                path : 'images',
                mediaType:'photo',
            },
            includeBase64:true,
        };
        launchImageLibrary(option, response=>{
            console.log('Response = ',response);
            if(response.didCancel){
                console.log('User Cancelled image picker');
            }else if (response.error){
                console.log('ImagePicker Error : '.response.error);
            }else if (response.customButton){
                console.log('User tapped custom button', response.customButton)
            }else{
                const source = {uri : 'data:image/jpeg;base64'+response.base64};
                setImgUri(source.uri);
               
            }
        });
    }


    return( 
        <NativeBaseProvider>
            <Image
            
                source={imgUri}

                style={{height:100,width:100,borderWidth:2,borderColor:"black"}}
            />
            <Button title='Open Camera' onPress={()=>{
                openCamera()
                alert("Press")
            }}></Button>

            <Image
                source={imgUri}

                style={{height:100,width:100,borderWidth:2,borderColor:"black"}}
               
            />
            <Button title='Open Camera' onPress={()=>{
                openGallery()
                alert("Press")
            }}></Button>
        </NativeBaseProvider>
    )
}