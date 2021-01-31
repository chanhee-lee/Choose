import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import {
  View, StyleSheet, TouchableHighlight, Alert,
  Modal, Text,
} from 'react-native';
import { storeData, getData } from '../model/DataStorage';
import Log from '../components/Log';
import Choices from '../components/Choices';
import StoryMap from '../model/Tree';
import { Color, Delay } from '../constants';
import Death from '../screens/Death';
import Party from '../screens/Party';
import VendingKeypad from '../components/VendingKeypad';
import Ending from '../screens/Ending';

const Story = ({ navigation, route }) => {
  const [logs, setLogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentNode, setCurrentNode] = useState({});
  const [deathCount, setDeathCount] = useState(-1);
  const [showDeathScreen, setShowDeathScreen] = useState(false);
  const [showPartyScreen, setShowPartyScreen] = useState(false);
  const [showEndingScreen, setShowEndingScreen] = useState(false);
  const [partyDecision, setPartyDecision] = useState("");
  const [endingDecision, setEndingDecision] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [vendingInput, setVendingInput] = useState('');
  const choicesRef = useRef();

  // Populate current node state from storage
  if (Object.keys(currentNode).length === 0 && currentNode.constructor === Object) { // If currentNode is {}
    getData('currentNode').then((data) => {
      setCurrentNode(data);
      setLoading(false);
    })
  }

  // Populate logs state from storage
  if (!logs) {
    getData('logs').then(data => {
      setLogs(data);
      setLoading(false);
    })
  }

  // Populate death state from storage
  if (deathCount === -1) {
    getData('deathCount').then(data => {
      setDeathCount(data);
    })
  }

  const updateCurrentNode = (node) => {
    setCurrentNode(node);
    storeData('currentNode', node);
  }

  const updateLogs = (node) => {
    setLogs(prevLogs => {
      storeData('logs', [...prevLogs, node])
      return [...prevLogs, node];
    });
  }

  const choiceHandler = (node) => {
    addWordHandler(node);
    if (node?.isDeath) {  // Death Scene Node
      deathCountHandler();
      updateLogAfterDeath(node);
      deathScreenHandler(true);
      updateCurrentNode(StoryMap.get(node.savePoint[0]));
    } else if (node?.isPartyScene) {  // Party Scene Node
      partyScreenHandler(true);
      setPartyDecision(node?.label);
      updateCurrentNode(StoryMap.get(node?.children[0]));
    } else if (node?.isEndingScene) { // Ending Scene Node
      endingScreenHandler(true);
      setEndingDecision(node?.label);
    } else {  // Regular Node
      updateCurrentNode(node);
      handleNarration(node);
      handleVending(node);
    }
  };

  const updateLogAfterDeath = (node) => {
    let savePointIndex = -1;
    for (var index = 0; index < logs.length; index++) {
      if (logs[index].label === StoryMap.get(node.savePoint[0]).label) {
        savePointIndex = index;
        break;
      }
    }
    if (savePointIndex != -1) {
      logs.splice(savePointIndex + 1, logs.length - savePointIndex - 1);
      storeData('logs', logs);
      setLogs(logs);
    }
  }

  const handleNarration = (node) => {
    if (node?.children && node?.children.length == 1 && StoryMap.get(node.children[0]).isNarration) { // Narration will be an only child
      if (node?.children && node?.children.length == 1 && StoryMap.get(node.children[0]).isNarration) { // Narration will be an only child
        choicesRef?.current?.setBDisabled(true);
        setTimeout(() => {
          choicesRef?.current?.setBDisabled(false);
          addWordHandler(StoryMap.get(node.children[0]));
          updateCurrentNode(StoryMap.get(node.children[0]));
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
    updateLogs(node);
  };

  const deathCountHandler = () => {
    setDeathCount(prevCount => prevCount + 1);
  };

  const deathScreenHandler = (val) => {
    setShowDeathScreen(val);
  };

  const resetGameHandler = () => {
    storeData('deathCount', 0);
    storeData('settings', {});
    storeData('checkpoint', {});
    storeData('currentNode', StoryMap.get('0'));
    storeData('logs', []);
    navigation.navigate("Menu", title = "Menu");
  };

  const partyScreenHandler = (val) => {
    setShowPartyScreen(val);
  };

  const endingScreenHandler = async (val) => {
    setShowEndingScreen(val);
    resetGameHandler();
  };

  const renderScreen = () => {
    if (!loading && logs) {
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
    } else {
      return (
        <View />
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