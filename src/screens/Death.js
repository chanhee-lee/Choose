import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { Color, Delay } from '../constants';
import { DeathText } from '../cutSceneText';

// Constants
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

// let wordsList = [];
let index = 0;
let delay = Delay.SLOW_DELAY;
let containerStyle;

// Returns random CSS screen positions for each word
const generateRandomPosition = () => {
  return {
    top: Math.floor(Math.random() * (WINDOW_HEIGHT / 1.25)) + 1,
    left: Math.floor(Math.random() * (WINDOW_WIDTH / 1.75)) + 1,
  }
};

const Death = ({ deathCount, showDeathScreen, resetGame, navigation }) => {
  const [wordsList, setWordsList] = useState([]);

  // Sets container style for Game Over/Regular screen
  if (deathCount === 9) {
    containerStyle = styles.gameOverScreen;
  } else {
    containerStyle = styles.regularScreen;
  }

  // Deaths 7-9 will have fast delay
  if (deathCount === 7 || deathCount === 8 || deathCount === 9) {
    delay = Delay.FAST_DELAY;
  }
  useEffect(() => {
    index += 1;
  }, [wordsList])

  let word = DeathText[deathCount][index];

  // Death Screens
  index < DeathText[deathCount].length && deathCount < 9 && setTimeout(() => {
    setWordsList(prevWords => {
      const newWord = <Text key={index} style={{ ...styles.regularText, ...generateRandomPosition() }}>{word}</Text>;

      // Clears wordsList for Deaths 1-6
      return delay === Delay.SLOW_DELAY ? [newWord] : [...prevWords, newWord]
    })
  }, delay);

  // Game Over Screen
  index < DeathText[deathCount].length && deathCount === 9 && setTimeout(() => {
    setWordsList(<Text key={index} style={{ ...styles.gameOverText }}>{word}</Text>)
  }, delay);

  // Stops showing death screen with delay
  index >= DeathText[deathCount].length && setTimeout(() => {
    if (deathCount === 9) {
      delay = Delay.SLOW_DELAY;
      index = 0;
      resetGame();
      navigation.navigate('Menu');
    } else {
      index = 0;
      showDeathScreen(false);
    }
  }, Delay.ENDING_DELAY);


  return (
    <ImageBackground source={require('../../assets/darkBackground.jpg')} style={containerStyle}>
      <View>
        {wordsList}
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  regularScreen: {
    flex: 1,
    resizeMode: 'cover',
    padding: 20,
  },
  regularText: {
    color: Color.death,
    position: 'absolute',
    fontSize: 36,
    fontFamily: 'sans-serif',
  },
  gameOverScreen: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameOverText: {
    color: Color.death,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    fontFamily: 'sans-serif',
  }
})

export default Death;