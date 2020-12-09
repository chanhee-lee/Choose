import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';
import { Color, Delay } from '../constants';

const scene1 = [
  { id: 1,  label: "As soon as you step into the house..." },
  { id: 2,  label: "you hear music blasting in the living room." },
  { id: 3,  label: "Chuckling at the sight of someone attempting a keg stand..." },
  { id: 4,  label: "you look around the room for your friend." },
  { id: 5,  label: "Through all the music and indistinct conversations..." },
  { id: 6,  label: "you hear your friend." },
  { id: 7,  label: "\"HEYYY! It\'s you!!!\"" },
  { id: 8,  label: "\"What\'s up, what\'s up? You\'re late to the party.\"" },
  { id: 9,  label: "Your friend gives you a hug and you get a large whiff of alcohol." },
  { id: 10, label: "You laugh." },
  { id: 11, label: "Before you can ask about how much alcohol they\'ve drank..." },
  { id: 12, label: "Your friend announces to the room..." },
  { id: 13, label: "\"MORE SHOTS FOR EVERYONE\" and drags you to the kitchen." },
  { id: 14, label: "Your friend pours a hefty amount of everclear into a red solo cup..." },
  { id: 15, label: "and comes back to you with a mischievous smile." },
  { id: 15, label: "\"Take it.\"" },
];

const scene2 = [
  { id: 16, label: "When you look up after regaining balance..." },
  { id: 17, label: "You realize that you\'re in a dark room..." },
  { id: 18, label: "full... of mannequins" },
  { id: 19, label: "You notice movement behind the mannequins." },
  { id: 20, label: "You see it." },
  { id: 21, label: "The dark figure." },
];

const scene2DrinkIntro = [
  { id: 22, label: "As you finish inhaling an absurd amount of ever clear..." },
  { id: 23, label: "your head spins." },
];

const scene2RefuseIntro = [
  { id: 24, label: "As you push away the drink..." },
  { id: 25, label: "your head spins."},
];

let sentenceToDisplay = "";
let partyScene = scene1;

const Party = ({currentScene, partyDecision, showPartyScene, font}) => {
  const [index, setIndex] = useState(0);

  // Sets up Party Scene text
  if (currentScene?.label === "Party Scene 1") {
    partyScene = scene1;
  } else if (currentScene?.label === "Party Scene 2") {
    if (partyDecision === "Take Drink") {
      partyScene = scene2DrinkIntro.concat(scene2);
    } else if (partyDecision === "Refuse") {
      partyScene = scene2RefuseIntro.concat(scene2);
    } else {
      partyScene = scene2;
    }
  }

  useEffect(() => {
    // Plays Opening Scene with no delay
    index < partyScene.length && index === 0 && setTimeout(() => {
      sentenceToDisplay = partyScene[index].label;
      setIndex(prevIndex => prevIndex + 1);
    }, Delay.MED_DELAY);

    // Plays rest of the scene with delay
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
  )
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
    fontSize: 30,
    textAlign: 'center',
  }
});

export default Party;