import React from 'react'
import {View,StyleSheet,Image} from "react-native";
import logo from "../assets/calculatorlogo2.png";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.innerimg}/>
      </View>
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
    height:"100%",
    backgroundColor:"#FF5757",
    alignItems:"center",
    justifyContent:"center",
    width:"100%"
  },
  inner:{
    // display:"flex",
    // flexDirection:"column",
    width:100,
    height:100,
    backgroundColor:"innerhit",
  },
  innerimg:{
    width:100,
    height:100
  }
})
export default IntroScreen;
