import React from 'react';
import { View, Text, Button } from 'react-native';

// Variables Under Each Node (* means it's a required field)
// id*
// label*
// savePoint: null
// children: []
// font: null, 
// fontColor: null,
// fontSize: null,
// fontStyle: null,
// isNarration: null, 
// timer: null,
// isDeath: null, 

/** This file contains the story in a map format. The data structure is a tree.
 *  Given an id, it will return the corresponding node */
export default StoryMap = new Map();
// When testing these check if key matches id + if it matches tree diagram
StoryMap.set('0', { id: '0', label: "", children: ['1']});
StoryMap.set('1', { id: '1', label: 'Choose.', children: ['1a', '1b'] });
StoryMap.set('1a', { id: '1a', label: 'Sleep', children: ['1a', '1b'] });
StoryMap.set('1b', { id: '1b', label: 'Wake', children: ['2']});

StoryMap.set('2', { id: '2', label: 'Room', isNarration: true, children: ['2a', '2b', '2c'] });
StoryMap.set('2a', { id: '2a', label: 'Window', children: ['2a1'] });
StoryMap.set('2a1', { id: '2a1', label: 'Dark', children: ['2a2'], isNarration: true });
StoryMap.set('2a2', { id: '2a2', label: 'Distant Noises', children: ['2a, 2b, 2c'], isNarration: true });
StoryMap.set('2c', { id: '2c', label: 'Smell', children: ['2c1'] });
StoryMap.set('2c1', { id: '2c1', label: 'Rancid', children: ['2a', '2b', '2c'], isNarration: true });
StoryMap.set('2b', { id: '2b', label: 'Door', children: ['2b1'] });
StoryMap.set('2b1', { id: '2b1', label: 'Locked', children: ['3a', '3b'], isNarration: true });

StoryMap.set('3a', { id: '3a', label: 'Desk', children: ['3a1','3a2'] });
StoryMap.set('3a1', { id: '3a1', label: 'Drawer', children: ['3a1a'] });
StoryMap.set('3a1a', { id: '3a1a', label: 'Picture', children: ['3a1b', '3a1d'] });
StoryMap.set('3a1b', { id: '3a1b', label: 'Front', children: ['3a1c'] });
StoryMap.set('3a1c', { id: '3a1c', label: '\"Sister\"', children: ['3a1', '3a2'], isNarration: true });
StoryMap.set('3a1d', { id: '3a1d', label: 'Back', children: ['3a1e'] });
StoryMap.set('3a1e', { id: '3a1e', label: '06/04', children: ['3a1', '3a2'], isNarration: true, fontWeight: 'italic' });
StoryMap.set('3a2', { id: '3a2', label: 'Pills', children: ['3a2a, 3a2c'] });
StoryMap.set('3a2a', { id: '3a2a', label: 'Eat', children: ['3a2b'] });
StoryMap.set('3a2b', { id: '3a2b', label: 'Relaxed', children: ['4'], fontStyle: 'italic', isNarration: true });
StoryMap.set('3a2c', { id: '3a2c', label: 'Ignore', children: ['3a', '3b'] });

StoryMap.set('3b', { id: '3b', label: 'Wardrobe', children: ['3b1, 3b2'] });
StoryMap.set('3b1', { id: '3b1', label: 'Mirror', children: ['3b1b'] });
StoryMap.set('3b1b', { id: '3b1b', label: 'Broken', children: ['3a'], isNarration: true});
StoryMap.set('3b2', { id: '3b2', label: 'Tie', children: ['3b2b'] });
StoryMap.set('3b2b', { id: '3b2b', label: 'Looped', children: ['3a'], isNarration: true});

StoryMap.set('4', { id: '4', label: 'Knock Knock', children: ['4a', '4b'], fontStyle: 'italic', isNarration: true});
StoryMap.set('4b', { id: '4b', label: 'Hide', children: ['4b1'] });
StoryMap.set('4b1', { id: '4b1', label: '...', children: ['4a','4b'], isNarration: true });

StoryMap.set('4a', { id: '4a', label: 'Open Door', children: ['5a', '5b', '5c'], fontStyle: 'italic', isNarration: true});
StoryMap.set('5c', { id: '5c', label: 'Examine Door', children: ['5c1'] });
StoryMap.set('5c1', { id: '5c1', label: '\"304.\"', children: ['5a', '5b'] });

StoryMap.set('5b', { id: '5b', label: 'Right', children: ['5b1'] });
StoryMap.set('5b1', { id: '5b1', label: 'Dark Hallway', children: ['5b2'] });
StoryMap.set('5b2', { id: '5b2', label: 'Cold', children: ['5b3', '5b4'] });
StoryMap.set('5b3', { id: '5b3', label: 'Go Back', children: ['6'] });
StoryMap.set('5b4', { id: '5b4', label: 'Continue Forward', savePoint: ['4'], isDeath: true });

StoryMap.set('5a', { id: '5a', label: 'Left', children: ['6'] });
StoryMap.set('6', { id: '6', label: 'Bathroom', children: ['6a', '6b'] });

