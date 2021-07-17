import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Default from './defaultScreen'
import cameraScreen from './cameraScreen2';
import galleryScreen from './galleryScreen';
import cropperScreen from './cropperScreen2';

const screens ={
    Home: {
      screen: Default
    },
    Camera: {
        screen: cameraScreen
    },
    Gallery: {
        screen: galleryScreen
    },
    Cropper: {
        screen: cropperScreen
    }
  }
  const HomeStack = createStackNavigator(screens);

  export default createAppContainer(HomeStack);