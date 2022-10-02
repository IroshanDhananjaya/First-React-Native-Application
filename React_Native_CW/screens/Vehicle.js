import { View, Text, Button,StyleSheet,TouchableOpacity} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack,ScrollView,HStack, TextArea, VStack, KeyboardAvoidingView } from "native-base";


export default function Vehicle({ navigation }) {

  return(
      <NativeBaseProvider>
        <KeyboardAvoidingView>

      
       <Box style={styles.box}>
           
                <Text style={styles.header}> Add New Vehicle</Text>
                <Stack style={styles.stack} space={1} flx w="90%" justifyContent="center">
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Vehicle Number" />
                        <Input variant="underlined" w="180"  type='text' placeholder="Brand" />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Model" />
                        <Input variant="underlined" w="180"  type='text' placeholder="Year Of Manufacture" />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Condition" />
                        <Input variant="underlined" w="180"  type='text' placeholder="Transmission" />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Fuel Type" />
                        <Input variant="underlined" w="180"  type='text' placeholder="Engine Capacity" />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="180"  type='text' placeholder="Mileage" />
                        <Input variant="underlined" w="180"  type='text' placeholder="Category" />
                    </HStack>
                    <HStack w="90%" space={3} justifyContent="center">
                         <Input variant="underlined" w="370"  type='text' placeholder="Discription" />
                        
                    </HStack>
                 </Stack>
                 <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("VehicleIMG")}}>
                  <Text  style={{color:'#ffffff',fontSize:20,fontWeight:"bold"}}> Next </Text>
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
    backgroundColor:"blue",
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