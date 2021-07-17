import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Button, Dimensions } from 'react-native';
import Navigator from "./app/homeStack"



export default function App() {

  return (<Navigator />
    
   /* <View style={styles.container}>

      <View style={{marginVertical: 10}}>
        <Text style={styles.titleText}>DyteCamScanner</Text>
      </View>

      <View style={styles.button}>
      <Button  
      title="Open Camera"  
      onPress={() =><cameraScreen/>}  
      />
      </View>

      <View style={styles.button}>  
      <Button  
      title="Open Gallery"  
      onPress={() => this.props.navigation.navigate('Profile')}  
      />
      </View>

      <StatusBar style="auto" />
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row', 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    elevation:3,
  },
  titleText: {
    fontFamily: 'serif',
    fontSize: 25,
    fontWeight: "bold"
  }

});
