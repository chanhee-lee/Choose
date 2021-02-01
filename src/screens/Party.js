import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';
import { Color, Delay, Size } from '../constants';
import { PartyText } from '../cutSceneText';

let partyScene = [];
let sentence;
let index = 0;

const Party = ({currentScene, partyDecision, showPartyScene, font}) => {
  const [sentenceToDisplay, setSentenceToDisplay] = useState([]);

  useEffect(() => {
    index += 1;
  }, [sentenceToDisplay])

  // Sets up Party Scene text
  if (currentScene?.label === "Party Scene 1") {
    partyScene = PartyText.scene1;
  } else if (currentScene?.label === "Party Scene 2") {
    if (partyDecision === "Take Drink") {
      partyScene = [...PartyText.scene2DrinkIntro, ...PartyText.scene2];
    } else if (partyDecision === "Refuse") {
      partyScene = [...PartyText.scene2RefuseIntro, ...PartyText.scene2]
    } else {
      partyScene = PartyText.scene2;
    }
  }

  if (index >= partyScene.length) {
    sentence = "";
  } else {
    sentence = partyScene[index].label;
  }

  // Plays Opening Scene with medium delay
  index < partyScene.length && index === 0 && setTimeout(() => {
    setSentenceToDisplay(<Text style={{...styles.text, ...font}}>{sentence}</Text>)
  }, Delay.MED_DELAY);

  // Plays rest of the scene with specified delay
  index < partyScene.length && index > 0 && setTimeout(() => {
    setSentenceToDisplay(<Text style={{...styles.text, ...font}}>{sentence}</Text>)
  }, Delay.PARTY_DELAY);

  // End Party Scene with delay
  index >= partyScene.length && setTimeout(() => {
    index = 0;
    showPartyScene(false);
  }, Delay.PARTY_DELAY);

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

export default Party;