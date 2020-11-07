import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Word = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  }
})

export default Word;