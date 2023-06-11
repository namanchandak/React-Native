import React from "react";
import { View,Button, Image, ImageBackground, StyleSheet, Text } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },
    overlayImage: {
      position: 'absolute',
      top: 50,
      left: 160,
      width: '20%',
      height: '20%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    overlayImageGirl: {
      position: 'absolute',
      top: 260,
      left: 100,
      width: '60%',
      height: '60%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    overlayImageStage: {
      position: 'absolute',
      top: 400,
      left: 0,
      width: '100%',
      height: '70%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });

import logo from './assets/award_bg.png';
import logo2 from './assets/castingLogo.png';
import logo4 from './assets/girlClap.png';
import stage from './assets/awardPlatform.png';




const Home=({navigation})=>{

    setTimeout(() => {
        navigation.navigate('Details')
        }, 1000);

    return(
        // <View style={{flex:1}}>
        //     <Text>
        //         Home
        //     </Text>

        //     <Button onPress={()=>{
        //         console.log("button ") 
        //         navigation.navigate('Details')
        //     }
            
        //     }
            
        //     title="next"
            
        //     ></Button>
        // </View>

        <View style={styles.container}>
      <ImageBackground source={logo} style={styles.image}>
        {/* Add your other content here */}
      </ImageBackground>

      <Image source={logo2} style={styles.overlayImage} />
      <Image source={logo4} style={styles.overlayImageGirl} />
      {/* <Text>{route.params?.ParaKey}</Text> */}
      <Image source={stage} style={styles.overlayImageStage} />
    </View>
    )
}

export default Home