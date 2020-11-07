import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {

  },
  buttonText: {

  }
})


export default MenuButton;