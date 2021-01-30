import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../constants';

class Word extends PureComponent {
  render() {
    const { label, font, isNarration } = this.props;
    return (
      <View>
        <Text style={{ ...styles.text, ...font, fontStyle: isNarration ? 'italic' : null }}>{label}</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: Color.secondary
  }
});

export default Word;