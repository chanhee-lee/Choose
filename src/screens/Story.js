import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import Log from '../components/Log';
import Choice from '../components/Choice';
import StoryMap from '../model/Tree';

const Story = () => {
  const [logs, setLogs] = useState([]);
  const [currentNode, setCurrentNode] = useState(StoryMap.get('0'));

  const choiceHandler = (node) => {
    setCurrentNode(StoryMap.get(node.id)); // Update Node
    addWordHandler(node); // Update log
  }

  const addWordHandler = (node) => {
    console.log(node);
    setLogs(prevLogs => {
      return [...prevLogs, node];
    });
  };
  return (
    <View style={styles.container}>
      <Log
        data={logs}
      />
      <Choice
        children={currentNode?.children}
        onPress={choiceHandler}
        storyMap={StoryMap}
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