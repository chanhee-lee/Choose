import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Color, Delay, Size } from '../constants';
import { EndingText } from '../cutSceneText';

let index = 0;
let endingScene = [];
let sentence;

const Ending = ({navigation, endingDecision, showEndingScene, resetGame, font}) => {
  const [sentenceToDisplay, setSentenceToDisplay] = useState([]);

  useEffect(() => {
    index += 1;
  }, [sentenceToDisplay])

  // Sets up the Ending Scene text
  if (index === 0) {
    if (endingDecision === "Drive Away") {
      endingScene = EndingText.badEnding1;
    } else if (endingDecision === "Crawl Away") {
      endingScene = EndingText.badEnding2
    } else if (endingDecision === "Run Away") {
      endingScene = EndingText.goodEnding;
    }
  }

  if (index >= endingScene.length) {
    sentence = "";
  } else {
    sentence = endingScene[index].label;
  }

  // Plays rest of the ending scene with specified delay
  index < endingScene.length && setTimeout(() => {
    setSentenceToDisplay(<Text style={{...styles.text, ...font}}>{sentence}</Text>);
  }, Delay.ENDING_DELAY);

  // Finish ending scene with delay
  index >= endingScene.length && setTimeout(() => {
    resetGame();
    index = 0;
    navigation.navigate('Menu');
  }, Delay.ENDING_DELAY);

  return (
    <View style={styles.container}>
      {sentenceToDisplay}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  text: {
    color: Color.secondary,
    fontSize: Size.LG_FONT,
    textAlign: 'center',
  }
});

export default Ending;