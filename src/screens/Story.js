import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import Log from '../components/Log';
import Choices from '../components/Choices';
import StoryMap from '../model/Tree';
import { Color, Delay } from '../constants';
import Death from '../screens/Death';

const Story = ({navigation, route}) => {
  const [logs, setLogs] = useState([]);
  const [currentNode, setCurrentNode] = useState(StoryMap.get('0'));
  const [deathCount, setDeathCount] = useState(0);
  const [showDeathScreen, setShowDeathScreen] = useState(false);

  const choiceHandler = (node) => {
    setCurrentNode(StoryMap.get(node.id)); // Update Node
    addWordHandler(node);
    console.log("Node: ", node.label);
    if (node?.isDeath) {  // Death node
      deathCountHandler();
      deathScreenHandler(true);
      setCurrentNode(StoryMap.get(node.savePoint[0]));
    } else {  // Nondeath Node
      handleNarration(node);
    }
  };

  const handleNarration = (node) => {
    if (node?.children && node?.children.length == 1 && StoryMap.get(node.children[0]).isNarration) { // Narration will be an only child
      setTimeout(() => {
        addWordHandler(StoryMap.get(node.children[0]));
        setCurrentNode(StoryMap.get(node.children[0]));
        handleNarration(StoryMap.get(node.children[0]));
      }, Delay.MED_DELAY);
    } 
  }

  const addWordHandler = (node) => {
    setLogs(prevLogs => {
      return [...prevLogs, node];
    });
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

  const resetGameHandler = () => {
    setCurrentNode(StoryMap.get('0'));
    setLogs([]);
  };

  return showDeathScreen ? 
    <Death
      deathCount={deathCount}
      showDeathScreen={deathScreenHandler}
      resetGame={resetGameHandler}
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