import { View, Text, Button,StyleSheet,TouchableOpacity} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack  } from "native-base";


export default function HomePage({ navigation }) {

  return(
      <NativeBaseProvider>
       <Box style={styles.box}>
        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Vehicle")}}>
                  <Text style={{color:'#ffff',fontSize:20}}> Add New Vehicle </Text>
              
          </TouchableOpacity>
         
     
       </Box>
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
  stackContainer:{
    position:"relative",
    height:"50%",
    color:"black",
    backgroundColor:"#ffffff",
    
  },
  text1:{

    top:"0%",
    color:"black",
    fontSize:60
  },
  btn:{
    position:"absolute",
    width:'50%',
    padding:5,
    backgroundColor:"blue",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    top:"5%",
    right:"5%",
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