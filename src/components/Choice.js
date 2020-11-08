import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Choice = ({ children, onPress, storyMap }) => { // Receives node, returns children as buttons
  let choiceList = children?.map(function (nodeRef) {
    let node = storyMap.get(nodeRef);
    console.log("NODE: ", node); 
    return (
      <TouchableOpacity onPress={() => onPress(node)} style={styles.button}>
        <Text>{node.label}</Text>
      </TouchableOpacity>
    )
  });

  return (<View>{choiceList}</View>)
};

const styles = StyleSheet.create({
  button: {
    width: "30%",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    margin: 10
  },
  text: {

  }
});

export default Choice;