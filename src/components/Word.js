import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Word = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 48,
  }
})

export default Word;