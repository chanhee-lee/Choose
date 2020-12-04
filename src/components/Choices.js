import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Color from '../constants';
import Divider from '../components/Divider';

const Choices = ({ children, onPress, storyMap, font }) => { // Receives node, returns children as buttons
  let choiceList = children?.map(function (childNodeRef) {
    let chosenNode = storyMap.get(childNodeRef);
    return (
      chosenNode &&
      <TouchableOpacity onPress={() => onPress(chosenNode)} style={styles.button}>
        <Text style={{ ...styles.text, ...font }}>{chosenNode.label}</Text>
      </TouchableOpacity>
    )
  });

  return (
    <View style={styles.wrapper}>
      <Divider />
      <View style={styles.container}>
        {choiceList}
      </View>
      <Divider />
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    marginBottom: 50
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 56,
    width: "100%",
    backgroundColor: Color.primary,
    marginTop: 1,
    marginBottom: 1
  },
  button: {
    width: "30%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  text: {
    fontSize: 24,
    fontFamily: "sans-serif",
    color: Color.secondary
  }
});

export default Choices;