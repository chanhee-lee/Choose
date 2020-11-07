import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
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


export default MenuButton;