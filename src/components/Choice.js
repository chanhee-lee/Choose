import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Choice = (props) => {
  const word = {
    label: props.label
  }

  return (
    <TouchableOpacity onPress={() => props.onPress(word)} style={styles.button}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  )
}

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