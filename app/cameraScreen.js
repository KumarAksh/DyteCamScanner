import React,{Component, useState, useEffect , useRef} from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import {Feather as Icon} from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

export default function cameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const cam = useRef(Camera);
  const _takePicture = async()=>{
    if(cam.current){
      const options = {quality:0.5, base64:true, skipProceesing:true};
      let photo = await cam.current.takePictureAsync(options);

      console.log(cam.current.getSupportedRatioAsync());
      const source = photo.uri;
      if(source){
        cam.current.resumePreview();
        handleSave(source);
        console.log("Picture Source", source);
      }
    }

  };

  const handleSave = async (photo) =>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if(status === "granted"){
      const assert = await MediaLibrary.createAssetAsync(photo);
      MediaLibrary.createAlbumAsync('DyteCamScanner', assert);
    }else{
      console.log("Media Permision not given");
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera useRef={cam} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>

          <View style={{flexDirection: 'row', }}> 
            <View></View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => _takePicture}>
            <Icon name="aperture" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});