import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Color, Delay, Size } from '../constants';
import { EndingText } from '../cutSceneText';

let sentenceToDisplay = "";
let endingScene = [];

const Ending = ({endingDecision, showEndingScene, font}) => {
  const [index, setIndex] = useState(0);

  // Sets up the Ending Scene text
  if (endingDecision === "Drive Away") {
    endingScene = EndingText.badEnding1;
  } else if (endingDecision === "Crawl Away") {
    endingScene = EndingText.badEnding2
  } else if (endingDecision === "Run Away") {
    endingScene = EndingText.goodEnding;
  }

  useEffect(() => {
    // Plays start of ending scene with medium delay
    index < endingScene.length && index === 0 && setTimeout(() => {
      sentenceToDisplay = endingScene[index].label;
      setIndex(prevIndex => prevIndex + 1);
    }, Delay.MED_DELAY);

    // Plays rest of the ending scene with specified delay
    index < endingScene.length && index > 0 && setTimeout(() => {
      sentenceToDisplay = endingScene[index].label;
      setIndex(prevIndex => prevIndex + 1);
    }, Delay.ENDING_DELAY);

    // Finish ending scene with delay
    index >= endingScene.length && setTimeout(() => {
      showEndingScene(false);
      sentenceToDisplay = "";
    }, Delay.ENDING_DELAY);
  })

  return (
    <View style={styles.container}>
      <Text style={{...styles.text, ...font}}>{sentenceToDisplay}</Text>
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