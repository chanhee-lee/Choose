import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../constants';

const MenuButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{...styles.text, ...style}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
    margin: 5
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: 32,
    color: Color.secondary
  }
});


export default MenuButton;