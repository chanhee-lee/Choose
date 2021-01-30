import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import {
  View, StyleSheet, TouchableHighlight, Alert,
  Modal, Text,
} from 'react-native';
import Log from '../components/Log';
import Choices from '../components/Choices';
import StoryMap from '../model/Tree';
import { Color, Delay } from '../constants';
import Death from '../screens/Death';
import Party from '../screens/Party';
import VendingKeypad from '../components/VendingKeypad';
import Ending from '../screens/Ending';

const Story = ({ navigation, route }) => {
  const [logs, setLogs] = useState([]);
  const [currentNode, setCurrentNode] = useState(StoryMap.get('33b4'));
  const [deathCount, setDeathCount] = useState(0);
  const [showDeathScreen, setShowDeathScreen] = useState(false);
  const [showPartyScreen, setShowPartyScreen] = useState(false);
  const [showEndingScreen, setShowEndingScreen] = useState(false);
  const [partyDecision, setPartyDecision] = useState("");
  const [endingDecision, setEndingDecision] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [vendingInput, setVendingInput] = useState('');
  const choicesRef = useRef();

  const choiceHandler = (node) => {
    setCurrentNode(StoryMap.get(node.id)); // Update Node
    addWordHandler(node);
    if (node?.isDeath) {  // Death Scene Node
      deathCountHandler();
      deathScreenHandler(true);
      setCurrentNode(StoryMap.get(node.savePoint[0]));
    } else if (node?.isPartyScene) {  // Party Scene Node
      partyScreenHandler(true);
      setPartyDecision(node?.label);
      setCurrentNode(StoryMap.get(node?.children[0]));
    } else if (node?.isEndingScene) { // Ending Scene Node
      endingScreenHandler(true);
      setEndingDecision(node?.label);
    } else {  // Nondeath Node
      handleNarration(node);
      handleVending(node);
    }
  };

  const handleNarration = (node) => {
    if (node?.children && node?.children.length == 1 && StoryMap.get(node.children[0]).isNarration) { // Narration will be an only child
      if (node?.children && node?.children.length == 1 && StoryMap.get(node.children[0]).isNarration) { // Narration will be an only child
        choicesRef?.current?.setBDisabled(true);
        setTimeout(() => {
          choicesRef?.current?.setBDisabled(false);
          addWordHandler(StoryMap.get(node.children[0]));
          setCurrentNode(StoryMap.get(node.children[0]));
          handleNarration(StoryMap.get(node.children[0]));
        }, Delay.MED_DELAY);
      }
    }
  };

  const handleVending = (node) => {
    if (node.label === "Vending Machine") {
      setModalVisible(true);
    }
  }
  const handleVendingInput = (code) => {
    setVendingInput(code);
    switch (code) {
      case '69':
        choiceHandler(StoryMap.get('8aa'));
        break;
      case '53':
        choiceHandler(StoryMap.get('8ab'));
        break;
      default:
        choiceHandler(StoryMap.get('8ac'));
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
      resetGameHandler();
    }
  };

  const deathScreenHandler = (val) => {
    setShowDeathScreen(val);
  };

  const resetGameHandler = () => {
    setCurrentNode(StoryMap.get('0'));
    setLogs([]);
    setDeathCount(0);
  };

  const partyScreenHandler = (val) => {
    setShowPartyScreen(val);
  };

  const endingScreenHandler = async (val) => {
    setShowEndingScreen(val);
    resetGameHandler();
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
    } else if (showEndingScreen) {
      return (
        <Ending
          endingDecision={endingDecision}
          showEndingScene={endingScreenHandler}
          font={route.params.font}
          navigation={navigation}
        />
      )
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
            ref={choicesRef}
          />
          {modalVisible && <VendingKeypad modalVisible={modalVisible} setModalVisible={setModalVisible} handleVendingInput={handleVendingInput} />}
          {/* <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </TouchableHighlight> */}
        </View>
      )
    }
  }; // The commented button is for testing the vending machine 

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