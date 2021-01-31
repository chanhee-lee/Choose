import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, StyleSheet, View, Alert } from 'react-native';
import MenuButton from '../components/MenuButton';
import { Color } from '../constants';
import StoryMap from '../model/Tree';
import {
  useFonts,
  Cabin_500Medium,
  Cabin_500Medium_Italic,
  Cabin_700Bold,
  Cabin_700Bold_Italic
} from '@expo-google-fonts/cabin';
import { storeData, getData } from '../model/DataStorage';
import { AppLoading } from 'expo';


const Menu = (props) => {
  const [currentNode, setCurrentNode] = useState({});

  if (isEmpty(currentNode)) {
    getData('currentNode').then((data) => {
      setCurrentNode(data);
    })
  }

  // Every time this page is navigated to, refresh currentNode
  const isFocused = useIsFocused();
  useEffect(() => {
    getData('currentNode').then((data) => {
      setCurrentNode(data);
    })
  }, [isFocused])

  function resetGame() {
    storeData('deathCount', 0);
    storeData('settings', {});
    storeData('checkpoint', {});
    storeData('currentNode', StoryMap.get('0'));
    storeData('logs', []);
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

  // Use useEffect to load shit

  // Main Functions
  function newStory() {
    let reset = true;
    getData('currentNode').then((data) => {
      if (data.id !== "0") { // if there's a story, ask first 
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
                  font: styles.cabinFont
                })
              }
            }
          ],
          { cancelable: false }
        )
      } else {
        props.navigation.navigate('New Story', {
          font: styles.cabinFont
        })
      }
    })
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
          disabled={currentNode.id === '0'}
          onPress={() => props.navigation.navigate('Continue Story', {
            isContinue: true,
            font: Cabin_500Medium
          })}
          style={styles.button}
          title="Continue Story"
        />
        <MenuButton
          onPress={() => props.navigation.navigate('Achievements', {
            font: Cabin_500Medium
          })}
          style={styles.button}
          title="Achievements"
        />
        {/* <MenuButton
          onPress={() => props.navigation.navigate('Settings', {
            font: Cabin_500Medium
          })}
          style={styles.button}
          title="Settings"
        /> */}
      </View>
  );
}
const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
    fontFamily: "Cabin_500Medium_Italic",
    paddingBottom: 80
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