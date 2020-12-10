import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import Log from '../components/Log';
import Choices from '../components/Choices';
import StoryMap from '../model/Tree';
import { Color, Delay } from '../constants';
import Death from '../screens/Death';
import Party from '../screens/Party';
import VendingKeypad from '../components/VendingKeypad';

const Story = ({navigation, route}) => {
  const [logs, setLogs] = useState([]);
  const [currentNode, setCurrentNode] = useState(StoryMap.get('0'));
  const [deathCount, setDeathCount] = useState(0);
  const [showDeathScreen, setShowDeathScreen] = useState(false);
  const [showPartyScreen, setShowPartyScreen] = useState(false);
  const [partyDecision, setPartyDecision] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const choiceHandler = (node) => {
    setCurrentNode(StoryMap.get(node.id)); // Update Node
    addWordHandler(node);
    console.log("Node: ", node.label);
    if (node?.isDeath) {  // Death Node
      deathCountHandler();
      deathScreenHandler(true);
      setCurrentNode(StoryMap.get(node.savePoint[0]));
    } else if (node?.isPartyScene) {  // Party Node
      partyScreenHandler(true);
      setPartyDecision(node?.label);
      setCurrentNode(StoryMap.get(node?.children[0]));
    } 
    else {  // Nondeath Node
      handleNarration(node);
      handleVending(node); 
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
  };

  const handleVending = (node) => {
    if (node.label === "Vending Machine") {
      // Display Vending Machine 
      // After Input
        // Next node should be "You entered: _ _" // Maybe use fake node off tree to show this message then have children be next node
        // Return appropriate child node depending on answer 
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

  const partyScreenHandler = (val) => {
    setShowPartyScreen(val);
  };

  const renderScreen = () => {
    if (showDeathScreen) {
      return (
        <Death 
          deathCount={deathCount}
          showDeathScreen={deathScreenHandler}
          resetGame={resetGameHandler}
        />
      );
    } else if (showPartyScreen) {
      return (
        <Party
          currentScene={currentNode}
          partyDecision={partyDecision} 
          showPartyScene={partyScreenHandler}
          font={route.params.font}
        />
      );
    } else {
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
          {modalVisible && <VendingKeypad />}
        </View>
      )
    }
  };

  return renderScreen();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Color.primary
  },
});

export default Story;