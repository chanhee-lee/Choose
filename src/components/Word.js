import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants';

const Word = ({label}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
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