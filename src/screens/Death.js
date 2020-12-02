import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Dimensions } from 'react-native';
import Color from '../constants';

// Constants
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const SLOW_DELAY = 1500;
const FAST_DELAY = 50;
const deathScenes = {
  "1": ["House", "Music", "Fun"],
  "2": ["Friends", "Talking", "Dancing"],
  "3": ["Games", "Partying", "Drinking"],
  "4": ["Sister"],
  "5": ["Car", "Driving", "Promise"],
  "6": ["Sirens"],
  "7": ["Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead"],
  "8": ["Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty", "Guilty"],
  "9": ["Game Over"]
};

let wordsList = [];
let delay = SLOW_DELAY;
let deathCount = 8;
let containerStyle;

const generateRandomPosition = () => {
  return {
    top: Math.floor(Math.random() * (WINDOW_HEIGHT / 1.25)) + 1,
    left: Math.floor(Math.random() * (WINDOW_WIDTH / 1.75)) + 1,
  }
};

const Death = () => {
  const [index, setIndex] = useState(0);

  // Sets container style for Game Over/Regular screen
  if (deathCount === 9) {
    containerStyle = styles.gameOverScreen;
  } else {
    containerStyle = styles.regularScreen;
  }

  // Deaths 7-9 will have fast delay
  if (deathCount === 7 || deathCount === 8 || deathCount === 9) {
    delay = FAST_DELAY;
  }

  // Adds words to the screen with a delay
  useEffect(() => {
    let word = deathScenes[8][index];

    index < deathScenes[8].length && setTimeout(() => {
      // Game Over Screen
      if (deathCount === 9) {
        wordsList.push(<Text key={index} style={{...styles.gameOverText}}>{word}</Text>)
        setIndex(prevIndex => prevIndex + 1);
      } else {
        // Death Screens
        wordsList.push(<Text key={index} style={{...styles.regularText, ...generateRandomPosition()}}>{word}</Text>);
        setIndex(prevIndex => prevIndex + 1);

        // Clears wordsList for Deaths 1-6
        wordsList = delay === SLOW_DELAY ? [] : wordsList;
      }
    }, delay);
  });

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
    fontSize: 56,
    fontFamily: 'sans-serif',
  }
})

export default Death;