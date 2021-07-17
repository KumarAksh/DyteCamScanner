import React, {Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, Alert, Dimensions } from 'react-native';

import CustomCrop from "react-native-perspective-image-cropper";

import { Camera } from 'expo-camera';
import {Feather as Icon} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library'


class cropperScreen extends Component {
  componentWillMount() {
    Image.getSize(image, (width, height) => {
      this.setState({
        imageWidth: width,
        imageHeight: height,
        initialImage: image,
        rectangleCoordinates: {
          topLeft: { x: 10, y: 10 },
          topRight: { x: 10, y: 10 },
          bottomRight: { x: 10, y: 10 },
          bottomLeft: { x: 10, y: 10 }
        }
      });
    });
  }

  updateImage(image, newCoordinates) {
    this.setState({
      image,
      rectangleCoordinates: newCoordinates
    });
  }

  crop() {
    this.customCrop.crop();
  }

  render() {
    return (
      <View>
        <CustomCrop
          updateImage={this.updateImage.bind(this)}
          rectangleCoordinates={this.state.rectangleCoordinates}
          initialImage={this.state.initialImage}
          height={this.state.imageHeight}
          width={this.state.imageWidth}
          ref={ref => (this.customCrop = ref)}
          overlayColor="rgba(18,190,210, 1)"
          overlayStrokeColor="rgba(20,190,210, 1)"
          handlerColor="rgba(20,150,160, 1)"
          enablePanStrict={false}
        />
        <TouchableOpacity onPress={this.crop.bind(this)}>
          <Text>CROP IMAGE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}