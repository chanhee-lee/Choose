import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import Log from '../components/Log';
import Choice from '../components/Choice';

const Story = () => {
  const [logs, setLogs] = useState([]);

  const addWordHandler = (word) => {
    setLogs(prevLogs => {
      return [...prevLogs, word];
    });
  };

  return (
    <View style={styles.container}>
      <Log 
        data={logs}
      />
      <Choice 
        label="Choice1"
        onPress={addWordHandler}
      />
      <Choice 
        label="Choice2"
        onPress={addWordHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})

export default Story;