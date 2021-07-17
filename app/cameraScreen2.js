
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, Alert, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import {Feather as Icon} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library'

import * as FileSystem from 'expo-file-system';







export default class cameraScreen2 extends Component {
    constructor(props){
        super(props)
    }
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
  }

  async componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });
  }


  takePicture = async () => {
    if (this.camera) {
      const {uri} = await this.camera.takePictureAsync();
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
      /*Alert.alert(  
        'Title',  
        base64,  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    ); */
      /*const asset = await MediaLibrary.createAssetAsync(uri);
      MediaLibrary.createAlbumAsync('Expo', asset)
      .then(() => {
        console.log('Album created!');
      })
      .catch(error => {
        console.log('err', error);
      });*/
      this.props.navigation.setParams({data: [uri]})
      this.props.navigation.navigate('Cropper');
    }
  }


  render(){
      return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                  <Icon name="aperture" size={35} color="black" />
                </TouchableOpacity>
              </View>
            </Camera>
        </View>
      );
    
  }
  
}