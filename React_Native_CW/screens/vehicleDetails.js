import { View, Text, Button,StyleSheet,TouchableOpacity,Image, ImageBackground} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack,ScrollView,HStack, TextArea, VStack, KeyboardAvoidingView } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default function VehicleDetails({ navigation ,route}) {

    const [imgUri,setImgUri]=useState('');
    const [imgUri2,setImgUri2]=useState('');
    const [imgUri3,setImgUri3]=useState('');
    const [imgUri4,setImgUri4]=useState('');

     const[vDetails,setVDetails]=useState('')


    // const saveVehicle = async () => {
    //     try {
    //       const response = await fetch('http://192.168.1.132:4000/vehicle/', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({dataSet}),
    //       });
    //       const json = await response.json();
    //       alert(json.message)
    //     } catch (error) {
    //       console.error(error);
    //     }

    //     console.log(dataSet)
    //   }

    useEffect(() => {
        setVDetails(route.params.vehicle)
       
    })

    // const openCamera=()=>{
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //       }).then(image => {
    //         console.log(image);
    //         setImgUri(image.path)
    //       });
    // }

    // const openGallery=(method)=>{
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //       }).then(image => {
    //         console.log(image);
    //        // setImgUri(image.path)
    //         method(image.path)
    //       });
        
    // }
     return( 
        <NativeBaseProvider>

        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:25,top:10,left:140}} > {route.params.vehicle.vehicleNumber} </Text>    

        <ImageBackground
            source={{uri:imgUri}}
            style={{height:120,width:120,borderWidth:2,borderColor:"black",top:50, left:60,position:"absolute"}}
        />
        <ImageBackground
            source={{uri:imgUri}}
            style={{height:120,width:120,borderWidth:2,borderColor:"black",top:50, right:60,position:"absolute"}}
        />
        <ImageBackground
            source={{uri:imgUri}}
            style={{height:120,width:120,borderWidth:2,borderColor:"black",top:190, left:60,position:"absolute"}}
        />
        <ImageBackground
            source={{uri:imgUri}}
            style={{height:120,width:120,borderWidth:2,borderColor:"black",top:190, right:60,position:"absolute"}}
        />

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:340,left:65}} > Brand : </Text>
        <Text style={{marginBottom:10,fontWeight:'bold',color:"#222f3e", position:"absolute", fontSize:18,top:340,left:120}} > {route.params.vehicle.brand} </Text>

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:340,left:220}} > Model : </Text>
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:340,left:280}} > {route.params.vehicle.model} </Text> 

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:380,left:65}} >   Y.M  : </Text>
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:380,left:120}} > {route.params.vehicle.yearOfManufacture} </Text>

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:380,left:220}} > Condition : </Text> 
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:380,left:305}} > {route.params.vehicle.Vehiclecondition} </Text> 

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:420,left:20}} > Transmission :  </Text>
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:420,left:130}} > {route.params.vehicle.transmission} </Text>

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:420,left:220}} > Fuel Type :</Text> 
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:420,left:300}} > {route.params.vehicle.fuelType} </Text> 

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:460,left:40}} > Capacity :  </Text>
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:460,left:115}} > {route.params.vehicle.engineCapacity} </Text>

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:460,left:220}} > Mileage : </Text>
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:460,left:290}} > {route.params.vehicle.mileage} </Text> 

        <Text style={{marginBottom:10,fontWeight:'bold',color:"#5f27cd", position:"absolute", fontSize:18,top:500,left:65}} > Discription : </Text>
        <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:18,top:500,left:160}} > {route.params.vehicle.description} </Text> 

        <TouchableOpacity style={styles.Updatebtn} onPress={()=>{navigation.navigate("Vehicle Update",{vDetails})}}>
              <Text style={{color:'#ffff',fontSize:20}}> Update </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Deletebtn} >
              <Text style={{color:'#ffff',fontSize:20}}> Delete </Text>
          </TouchableOpacity>

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
    },
    Updatebtn:{
      position:"absolute",
      width:'40%',
      top:590,
      left:30,
      padding:5,
      backgroundColor:"green",
      height:50,
      alignItems:'center',
      justifyContent:'center',
    },
    Deletebtn:{
      position:"absolute",
      width:'40%',
      top:590,
      left:200,
      padding:5,
      backgroundColor:"red",
      height:50,
      alignItems:'center',
      justifyContent:'center',
    }
  })