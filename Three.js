import React, { useState, useEffect } from 'react';
import { View, Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  button: {
    position: 'absolute',
    top: 10,
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
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

const Three = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleArrowPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/award_bg.png')} style={styles.image} />

      <Image source={require('./assets/castingLogo.png')} style={styles.overlayImage} />
      <Image source={require('./assets/girlClap.png')} style={styles.overlayImageGirl} />
      <Image source={require('./assets/awardPlatform.png')} style={styles.overlayImageStage} />

      <TouchableOpacity onPress={handleArrowPress} style={styles.button}>
        <Image source={require('./assets/arrow.png')} style={styles.buttonImage} />
      </TouchableOpacity>

      <Text style={styles.countText}>{count}</Text>
    </View>
  );
};

export default Three;
