import { View, Text, Button,StyleSheet,TouchableOpacity} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack,ScrollView,HStack, TextArea, VStack, KeyboardAvoidingView } from "native-base";
import {useState,useEffect} from 'react';


export default function VehicleUpdate({ navigation,route }) {

  const [vNumber, setVNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [yearOfManufacture, setYearOfManufacture] = useState('');
  const [condition, setCondition] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [mileage, setMileage] = useState('');
  const [category, setCategory] = useState('');
  const [discription, setDiscription] = useState('');


  useEffect(() => {
        setVNumber(route.params.vDetails.vehicleNumber)

    console.log(route.params)
   
})

  VehicleData={
    vehicleNumber:vNumber,
    brand:brand,
    model:model,
    yearOfManufacture:yearOfManufacture,
    Vehiclecondition:condition,
    transmission:transmission,
    fuelType:fuelType,
    engineCapacity:engineCapacity,
    mileage:mileage,
    category:category,
    description:discription
  }

  return(
      <NativeBaseProvider>
        <KeyboardAvoidingView>

      
       <Box style={styles.box}>
                <Text style={styles.header}> Update Vehicle </Text>
                <Stack style={styles.stack} space={1} flx w="90%" justifyContent="center">
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Vehicle Number" value={vNumber}  onChangeText={(e) => {setVNumber(e,console.log(vNumber))}} />
                        <Input variant="underlined" w="180"  type='text' placeholder="Brand" onChangeText={(e) => {setBrand(e)}}/>
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Model" onChangeText={(e) => {setModel(e)}} />
                        <Input variant="underlined" w="180"  type='text' placeholder="Year Of Manufacture" onChangeText={(e) => {setYearOfManufacture(e)}} />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Condition" onChangeText={(e) => {setCondition(e)}} />
                        <Input variant="underlined" w="180"  type='text' placeholder="Transmission" onChangeText={(e) => {setTransmission(e)}} />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Fuel Type"  onChangeText={(e) => {setFuelType(e)}} />
                        <Input variant="underlined" w="180"  type='text' placeholder="Engine Capacity" onChangeText={(e) => {setEngineCapacity(e)}} />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Mileage" onChangeText={(e) => {setMileage(e)}} />
                        <Input variant="underlined" w="180"  type='text' placeholder="Category" onChangeText={(e) => {setCategory(e)}}/>
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="370"  type='text' placeholder="Discription" onChangeText={(e) => {setDiscription(e)}} />
                        
                    </HStack>
                 </Stack>
                 <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Upload Vehicle Images",{VehicleData})}}>
                  <Text  style={{color:'#ffffff',fontSize:20,fontWeight:"bold"}}> Update </Text>
              </TouchableOpacity>
     
              <TouchableOpacity style={styles.btn2} >
                  <Text  style={{color:'#ffffff',fontSize:20,fontWeight:"bold"}}> Cancl </Text>
              </TouchableOpacity>
            </Box>
            </KeyboardAvoidingView>
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
    top:"0%"
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
    position:"absolute",
    width:'40%',
    padding:5,
    backgroundColor:"green",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    top:"90%",
    left:"5%",
    borderRadius:100
  },
  btn2:{
    position:"absolute",
    width:'40%',
    padding:5,
    backgroundColor:"orange",
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