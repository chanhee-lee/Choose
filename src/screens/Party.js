import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';
import { Color, Delay, Size } from '../constants';
import { PartyText } from '../cutSceneText';

let sentenceToDisplay = "";
let partyScene = [];

const Party = ({currentScene, partyDecision, showPartyScene, font}) => {
  const [index, setIndex] = useState(0);

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

  useEffect(() => {
    // Plays Opening Scene with medium delay
    index < partyScene.length && index === 0 && setTimeout(() => {
      sentenceToDisplay = partyScene[index].label;
      setIndex(prevIndex => prevIndex + 1);
    }, Delay.MED_DELAY);

    // Plays rest of the scene with specified delay
    index < partyScene.length && index > 0 && setTimeout(() => {
      sentenceToDisplay = partyScene[index].label;
      setIndex(prevIndex => prevIndex + 1);
    }, Delay.PARTY_DELAY);

    // End Party Scene with delay
    index >= partyScene.length && setTimeout(() => {
      showPartyScene(false);
      sentenceToDisplay = "";
    }, Delay.PARTY_DELAY);
  });

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

export default Party;