import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../constants';
import Divider from '../components/Divider';

const Choices = ({ children, onPress, storyMap }) => { // Receives node, returns children as buttons
  let choiceList = children?.map(function (nodeRef) {
    let node = storyMap.get(nodeRef);
    return (
      <TouchableOpacity onPress={() => onPress(node)} style={styles.button}>
        <Text style={styles.text}>{node.label}</Text>
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
    fontSize: 32,
    fontFamily: "sans-serif",
    color: Color.secondary
  }
});

export default Choices;