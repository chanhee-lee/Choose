import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import Log from '../components/Log';
import Choices from '../components/Choices';
import StoryMap from '../model/Tree';
import Color from '../constants';

const Story = ({navigation, route}) => {
  const [logs, setLogs] = useState([]);
  const [currentNode, setCurrentNode] = useState(StoryMap.get('0'));

  const choiceHandler = (node) => {
    setCurrentNode(StoryMap.get(node.id)); // Update Node
    addWordHandler(node); // Update log
  }

  const addWordHandler = (node) => {
    setLogs(prevLogs => {
      return [...prevLogs, node];
    });
  };
  return (
    <View style={styles.container}>
      <Log
        data={logs}
        font={route.params.font}
      />
      <Choices
        children={currentNode?.children}
        onPress={choiceHandler}
        storyMap={StoryMap}
        font={route.params.font}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Color.primary
  },
})

export default Story;