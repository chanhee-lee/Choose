import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import Word from '../components/Word';

const DATA = [];

const Story = () => {

  const addLabel = () => {}

  const renderItem = ({item}) => {
    return (
      <Word text={item.text} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
      />
      <Button 
        title= "b1"
      />
      <Button 
        title="b2"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})

export default Story;