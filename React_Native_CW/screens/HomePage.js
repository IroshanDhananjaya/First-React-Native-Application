import { View, Text, Button,FlatList,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native'
import { NativeBaseProvider,Box, Input,Stack  } from "native-base";
import React, { useEffect, useState } from 'react'


export default function HomePage({ navigation , route }) {

  const [posts, setPosts] = useState([]);
  const[userId,setUserId]=useState('')

  useEffect(() => {
      fetch('http://192.168.1.132:4000/vehicle/'+route.params.userID)
          .then((response) => response.json())
          .then((json) => setPosts(json));

        setUserId(route.params.userID)
          
         
  })

  return(
      <NativeBaseProvider>
       <Box style={styles.box}>
        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Vehicle",{userId})}}>
                  <Text style={{color:'#ffff',fontSize:20}}> Add New Vehicle </Text>
        </TouchableOpacity>

        <FlatList  style={styles.itemContainer}
        data={posts}
        renderItem={({item})=>
           <TouchableOpacity style={styles.items}  onPress={()=>{navigation.navigate("Vehicle Details",{vehicle:item})}}>
            <ImageBackground
                        
                        style={{height:110,width:150,borderWidth:2,borderColor:"black"}}
                    />
              {/* <Text style={{marginBottom:10,fontWeight:'bold',color:"black"}} >{item.Vehiclecondition}</Text> */}
              <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:20,top:10,left:230}} >{item.vehicleNumber} </Text>
              <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:20,top:50,left:230}} > {item.brand} </Text>
              <Text style={{marginBottom:10,fontWeight:'bold',color:"black", position:"absolute", fontSize:20,top:90,left:230}} > {item.model} </Text>

              <Text style={{marginBottom:10}} >{item.brand}</Text>
           </TouchableOpacity>
         }
        >
          
        </FlatList>
         
     
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

  itemContainer:{
    marginTop:50,
    borderWidth:1, 
    marginBottom:'5%',
     padding:5
  },

  items:{
    borderWidth:1, 
    marginBottom:'5%',
    height:120,
    padding:5
  },


  btn:{
    position:"relative",
    width:'50%',
    padding:5,
    backgroundColor:"blue",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    top:"5%",
    left:"45%",
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