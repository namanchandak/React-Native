import React, { useState, useRef, useEffect } from 'react';
import { View,Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Animated } from 'react-native';

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
    top: 50, // Update this value to position the image at the top
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
    top: 10, // Update this value to position the button at the top
    right: 16,
    width: '10%',
    height: '10%',
    resizeMode: 'contain',
    alignSelf: 'center',
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

// Rest of your code...

const Details = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Three')
        }, 20000);


  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const imageAnimation = useRef(new Animated.Value(400)).current;

  const startAnimation = () => {
    setIsAnimationStarted(true);
    Animated.timing(imageAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPress = () => {
    if (!isAnimationStarted) {
      startAnimation();
    } else {
      Animated.timing(imageAnimation, {
        toValue: -400,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setIsAnimationStarted(false);
        imageAnimation.setValue(0);
      });
    }
  };
  

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.image}>
        {/* Add your other content here */}

        {/* <Button onPress={()=>{
                console.log("button ") 
                navigation.navigate('Three')
            }

            }

            title="next"

            ></Button> */}

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

            
      
      <TouchableOpacity onPress={handleButtonPress} style={styles.overlayImageArrow}>
        <Image source={arrow} style={styles.buttonImage} />
      </TouchableOpacity>

      

      <Image source={logo4} style={styles.overlayImageGirl} />
      <Image source={stage} style={styles.overlayImageStage} />
    </View>
  );
};

export default Details;
