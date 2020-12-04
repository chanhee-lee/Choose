import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import Log from '../components/Log';
import Choices from '../components/Choices';
import StoryMap from '../model/Tree';
import Color from '../constants';
import Death from '../screens/Death';

const Story = ({navigation, route}) => {
  const [logs, setLogs] = useState([]);
  const [currentNode, setCurrentNode] = useState(StoryMap.get('0'));
  const [checkpoint, setCheckpoint] = useState(currentNode);
  const [deathCount, setDeathCount] = useState(0);
  const [showDeathScreen, setShowDeathScreen] = useState(false);

  const choiceHandler = (node) => {
    setCurrentNode(StoryMap.get(node.id)); // Update Node

    // Updates checkpoint
    if (currentNode?.savePoint) {
      checkpointHandler(StoryMap.get(currentNode.savePoint[0]));
    }

    if (currentNode?.isDeath) {
      deathCountHandler();
      deathScreenHandler(true);
      setCurrentNode(checkpoint);
    } else {
      addWordHandler(node); // Update log
    }
  };

  const addWordHandler = (node) => {
    setLogs(prevLogs => {
      return [...prevLogs, node];
    });
  };
  
  const checkpointHandler = (node) => {
    setCheckpoint(node);
  };

  const deathCountHandler = () => {
    setDeathCount(prevCount => prevCount + 1);

    // Resets game after 9 deaths
    if (deathCount === 9) {
      setDeathCount(0);
    }
  };

  const deathScreenHandler = (val) => {
    setShowDeathScreen(val);
  };

  return showDeathScreen ? 
    <Death
      deathCount={deathCount}
      showDeathScreen={deathScreenHandler}
    /> : 
    (
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Color.primary
  },
})

export default Story;