import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Color from '../constants';

const Divider = (props) => {
  return (
    <View style={{...styles.divider, ...props.style}}></View>
  )
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: Color.secondary,
    marginVertical: 1
  }
})

export default Divider;