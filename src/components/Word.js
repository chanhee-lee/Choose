import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants';

const Word = ({label, font}) => {
  return (
    <View>
      <Text style={{...styles.text, ...font}}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: Color.secondary
  }
})

export default Word;