import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../constants';

export default function Settings({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings {'\n'}Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
    fontFamily: "Cabin_500Medium"
  },
  text: {
    textAlign: 'center',
    fontFamily: "Cabin_500Medium",
    fontSize: 32,
    color: Color.secondary
  }
})