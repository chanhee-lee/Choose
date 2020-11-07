import React, { useState } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import MenuButton from '../components/MenuButton';

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
          { text: "OK", 
            onPress: () => {
              resetGame();
              props.navigation.navigate('New Story', {
                deathCounter: deathCounter,
                setDeathCounter: setDeathCounter,
                checkpoint: checkpoint, 
                setCheckpoint: setCheckpoint
              })
          }}
        ],
        { cancelable: false }
      )
    } else {
      props.navigation.navigate('New Story', {
        deathCounter: deathCounter,
        setDeathCounter: setDeathCounter,
        checkpoint: checkpoint, 
        setCheckpoint: setCheckpoint
      })
    }
  }

  return (
    <View style={styles.menuContainer}>
      <Text>CHOOSE</Text>
      <MenuButton
        onPress={newStory}
        title="New Story"
      />
      <MenuButton
        onPress={() => props.navigation.navigate('Continue Story', {
          deathCounter: deathCounter,
          setDeathCounter: setDeathCounter,
          checkpoint: checkpoint, 
          setCheckpoint: setCheckpoint
        })}
        title="Continue Story"
      />
      <MenuButton
        onPress={() => props.navigation.navigate('Achievements', {
          achievements: achievements,
          setAchievements: setAchievements
        })}
        title="Achievements"
      />
      <MenuButton
        onPress={() => props.navigation.navigate('Settings', {
          settings: settings,
          setSettings: setSettings
        })}
        title="Settings"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  menuContainer: {

  }
})

export default Menu;