import React, { useEffect,useRef } from 'react';
import { View,Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Text  , Animated} from "react-native";



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
    overlayImageArrow: {
        position: 'absolute',
        top: 400,
        right: 16, // Adjust this value to position the icon on the right side
        width: '10%',
        height: '10%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
      },


  });

import logo from './assets/award_bg.png';
import logo2 from './assets/castingLogo.png';
import logo4 from './assets/girlClap.png';
import stage from './assets/awardPlatform.png';
import arrow from './assets/arrow.png';
import avtar2 from './assets/avtar2.png';





const Details=({navigation})=>{

    // setTimeout(() => {
    //     navigation.navigate('Three')
    //     }, 3000);


    const imageAnimation = useRef(new Animated.Value(0)).current;

    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(imageAnimation, {
          toValue: -200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(imageAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    };
  
    useEffect(() => {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(imageAnimation, {
            toValue: -200,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(imageAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      );
  
      animation.start();
  
      return () => {
        animation.stop();
      };
    }, []);

    return(

        <View style={styles.container}>


       



      <ImageBackground source={logo} style={styles.image}>
        {/* Add your other content here */}
      </ImageBackground>


      <Animated.Image
        source={avtar2}
        style={[
          styles.buttonImage,
          {
            transform: [{ translateX: imageAnimation }],
          },
        ]}
      />

            {/* {startAnimation} */}


      {/* <Image source={logo2} style={styles.overlayImage} /> */}
        
      <TouchableOpacity onPress={startAnimation} style={styles.overlayImageArrow}  >
      <Image source={arrow} style={styles.buttonImage} />
        </TouchableOpacity>

      <Image source={logo4} style={styles.overlayImageGirl} />
      {/* <Text>{route.params?.ParaKey}</Text> */}
      <Image source={stage} style={styles.overlayImageStage} />
    </View>
    )
}

export default Details;