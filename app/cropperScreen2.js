import React, {Component} from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomCrop from "react-native-perspective-image-cropper";
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

/*const cropperScreen = ({route}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            React Native Pass Value From One Screen to Another
            Using React Navigation
          </Text>
          <Text style={styles.textStyle}>
            Values passed from First page: {this.props.navigation}
          </Text>
        </View>
        <Text style={{textAlign: 'center', color: 'grey'}}>
          www.aboutreact.com
        </Text>
      </SafeAreaView>
    );
  };*/
  
class cropperScreen2 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const uri = this.props.navigation.route.params.data[0];
        return(
            <View>
                <Text>data is : {data}</Text>
            </View>
        );
    }
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

  export default cropperScreen2;