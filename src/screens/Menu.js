import React, { useState } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import MenuButton from '../components/MenuButton';
import {Color} from '../constants';
import {
  useFonts,
  Cabin_500Medium,
  Cabin_500Medium_Italic,
  Cabin_700Bold,
  Cabin_700Bold_Italic
} from '@expo-google-fonts/cabin';
import { AppLoading } from 'expo';

const Menu = (props) => {
  // States 
  const [deathCounter, setDeathCounter] = useState(0);
  const [settings, setSettings] = useState({});
  const [checkpoint, setCheckpoint] = useState({});
  const [achievements, setAchievements] = useState({});

  // Helper Functions
  function resetGame() {
    setDeathCounter(0);
    setSettings({});
    setCheckpoint({});
  }

  let [fontsLoaded] = useFonts({
    Cabin_500Medium,
    Cabin_500Medium_Italic,
    Cabin_700Bold,
    Cabin_700Bold_Italic
  });

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  // Main Functions
  function newStory() {
    let reset = true;
    if (!isEmpty(checkpoint)) { // if there's a story, ask first 
      Alert.alert(
        "Confirm",
        "Are you sure you want to start a new story? This will reset your previous progress",
        [
          {
            text: "Cancel",
            onPress: () => reset = false,
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => {
              resetGame();
              props.navigation.navigate('New Story', {
                deathCounter: deathCounter,
                setDeathCounter: setDeathCounter,
                checkpoint: checkpoint,
                setCheckpoint: setCheckpoint
              })
            }
          }
        ],
        { cancelable: false }
      )
    } else {
      props.navigation.navigate('New Story', {
        deathCounter: deathCounter,
        setDeathCounter: setDeathCounter,
        checkpoint: checkpoint,
        setCheckpoint: setCheckpoint,
        font: styles.cabinFont
      })
    }
  }

  return (
    !fontsLoaded ? <AppLoading /> :
      <View style={styles.menuContainer}>
        <Text style={styles.title}>CHOOSE</Text>
        <MenuButton
          onPress={newStory}
          title="New Story"
          style={styles.button}
        />
        <MenuButton
          onPress={() => props.navigation.navigate('Continue Story', {
            deathCounter: deathCounter,
            setDeathCounter: setDeathCounter,
            checkpoint: checkpoint,
            setCheckpoint: setCheckpoint,
            font: Cabin_500Medium
          })}
          style={styles.button}
          title="Continue Story"
        />
        <MenuButton
          onPress={() => props.navigation.navigate('Achievements', {
            achievements: achievements,
            setAchievements: setAchievements,
            font: Cabin_500Medium
          })}
          style={styles.button}
          title="Achievements"
        />
        <MenuButton
          onPress={() => props.navigation.navigate('Settings', {
            settings: settings,
            setSettings: setSettings,
            font: Cabin_500Medium
          })}
          style={styles.button}
          title="Settings"
        />
      </View>
  );
}
const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
    fontFamily: "Cabin_500Medium_Italic"
  },
  title: {
    fontFamily: "Cabin_500Medium_Italic",
    fontSize: 48,
    color: Color.secondary,
    margin: 50
  },
  button: {
    fontFamily: "Cabin_500Medium",
  },
  cabinFont: {
    fontFamily: "Cabin_500Medium"
  }
})

export default Menu;