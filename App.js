import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Views/MainScreen';
import IntroScreen from './Views/IntroScreen';

const App = () => {
  const [isloaded,setIsloaded] = useState(false)

  setTimeout(()=>{
    setIsloaded(true)
  },2000)
  return (
    <View style={styles.container}>
      {isloaded ? <MainScreen /> : <IntroScreen />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;