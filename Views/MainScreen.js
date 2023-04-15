import React, { useState,useRef } from "react";
import { View, Text, ScrollView, Pressable,StatusBar } from "react-native";
import styles from "../Views/MainScreenStyle";
import { Ionicons } from '@expo/vector-icons';

const MainScreen = () => {

  const [value,setValue] = useState("0")
  const [bracketOpen,setBracketOpen] = useState(false)
  const scrollViewRef = useRef();

  const handlePress = (val) => {
    console.log("pressed",val)
    if(val == "C"){
      setValue("0")
    }
    else if(val == "="){
      try{
        if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {
          // console.log("Equal Bracket")
          if(value.slice(-1) == "+" || value.slice(-1) == "-" || value.slice(-1) == "*" || value.slice(-1) == "%" || value.slice(-1) == "/" || value.slice(-1) == "."){
            setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
          }
          else{
            setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
          }
        }
        // else{
        //   console.log("Unequal brackets")
        // }
      }
      catch(error){
        setValue("Format Error")
      }
    }
    else if(val == "back"){
      setValue(value.slice(0,-1))
    }
    
  else if (val == '()') {
      if (value == '0') {
          setValue('(')
          setBracketOpen(true)

      }
      else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
          setValue(value + '(')
          setBracketOpen(true)
      }
      else {
          if (bracketOpen == true) {
              setValue(value + ')')
              setBracketOpen(false)
          }
          else {
              setValue(value + '(')
              setBracketOpen(true)
          }
      }
  }
  else if(value == "Format Error"){
    setValue(val)
  }
    else{
      //if 0 pressed
      if (value == "0")
      {
        if(isNaN(val)){
          setValue(value + val)
        }
        else {
          setValue(val)
        }
      }
      
      //if operators pressed
      else if(isNaN(val)){
        if(value.slice(-1) == "+" || value.slice(-1) == "-" || value.slice(-1) == "*" || value.slice(-1) == "%" || value.slice(-1) == "/" || value.slice(-1) == "."){
          setValue(value.slice(0,-1) + val)
        }
        else{
          setValue(value + val)
        }
        // console.log(value.slice(-1))
        // setValue(value + val)
      }

      //if operand pressed
      else {
        setValue(value + val)
      }

      console.log(isNaN(val))

      // console.log(value)
    }
  }
  
  return (
    <View style={styles.main_screen}>
      <ScrollView ref={scrollViewRef } style={styles.main_screen__display} onContentSizeChange={() =>scrollViewRef.current.scrollToEnd({ animated: true })}>
        <Text style={styles.main_screen__display_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
      </ScrollView>

     {/* horizontal lines */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#3c3c3c'}} />
        <View style={{flex: 1, height: 1, backgroundColor: '#3c3c3c'}} />
      </View>
      
      
      <View style={styles.main_screen__keypad}>
      {/* first row */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={()=>handlePress("C")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>C</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("()")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}> ( ) </Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("%")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}> % </Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("/")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}> / </Text>
            </View>
          </Pressable>
        </View>



        {/* second row */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={()=>handlePress("7")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>
          
          <Pressable onPress={()=>handlePress("8")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("9")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("*")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>*</Text>
            </View>
          </Pressable>
        </View>



        {/* third row */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={()=>handlePress("4")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>4</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("5")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>5</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("6")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>6</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("-")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>-</Text>
            </View>
          </Pressable>
        </View>



        {/* fourth row */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={()=>handlePress("1")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>1</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("2")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>2</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("3")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>3</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("+")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>+</Text>
            </View>
          </Pressable>
        </View>





        {/* fifth row */}
        <View style={styles.main_screen__keypad_row}>
          <Pressable onPress={()=>handlePress("0")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>0</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress(".")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>.</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("back")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}><Ionicons name="backspace" size={24} color="#26ba7c" /></Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>handlePress("=")}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_button}>=</Text>
            </View>
          </Pressable>
        </View>


      </View>
    </View>
  );
};

export default MainScreen;
