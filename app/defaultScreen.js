import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Button, Dimensions } from 'react-native';




export default function defaultScreen({navigation}) {


  return (
    
    <View style={styles.container}>

      <View style={{marginVertical: 10}}>
        <Text style={styles.titleText}>DyteCamScanner</Text>
      </View>

      <View style={styles.button}>
      <Button  
      title="Open Scanner"  
      onPress={() =>{navigation.navigate('Camera')}}  
      />
      </View>

      <View style={styles.button}>  
      <Button  
      title="Open Gallery"  
      onPress={() =>{navigation.navigate('Gallery')}}  
      />
      </View>

      <StatusBar style="auto" />
    </View>
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
