import React from 'react';
import { View, Text, Button } from 'react-native';
import {MED_FONT, LG_FONT} from '../constants';

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
StoryMap.set('3a1', { id: '3a', label: 'Drawer', children: ['3a1a'] });
StoryMap.set('3a1a', { id: '3a1a', label: 'Picture', children: ['3a1b', '3a1d'] });
StoryMap.set('3a1b', { id: '3a1b', label: 'Front', children: ['3a1c'] });
StoryMap.set('3a1c', { id: '3a1c', label: '\"Sister\"', children: ['3a1', '3a2'], isNarration: true });
StoryMap.set('3a1d', { id: '3a1d', label: 'Back', children: ['3a1e'] });
StoryMap.set('3a1d', { id: '3a1d', label: '06/04', children: ['3a1', '3a2'], isNarration: true, fontWeight: 'italic' });
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

StoryMap.set('6a', { id: '6a', label: 'Approach Mirrors', children: ['6a1'] });
StoryMap.set('6a1', { id: '6a1', label: 'TRAPPED', children: ['6b'], fontStyle: 'italic', fontColor: 'red' });
StoryMap.set('6b', { id: '6b', label: 'Check Showers', children: ['6b1'] });
StoryMap.set('6b1', { id: '6b1', label: 'Dark Figure.', children: ['6b1a', '6b1b'] });
StoryMap.set('6b1a', { id: '6b1a', label: 'Attack', savePoint: ['4'], isDeath: true });
StoryMap.set('6b1b', { id: '6b1b', label: 'Run', children: ['7a', '7b', '7c'] });

StoryMap.set('7a', { id: '7a', label: 'Room', children: ['7a1'] });
StoryMap.set('7a1', { id: '7a1', label: 'Locked.', children: ['7b', '7c'] });
StoryMap.set('7b', { id: '7b', label: 'Maintenance Elevator', children: ['7b1'] });
StoryMap.set('7b1', { id: '7b1', label: 'Disabled.', children: ['7c', '7a'] });
StoryMap.set('7c', { id: '7c', label: 'Stairs', children: ['7c1', '7c2'] });
StoryMap.set('7c2', { id: '7c2', label: 'Down', children: ['7c3'] });
StoryMap.set('7c3', { id: '7c3', label: 'Blocked.', children: ['7c1', '7c4'] });
StoryMap.set('7c4', { id: '7c4', label: 'Down', savePoint: ['7c'], isDeath: true });
StoryMap.set('7c1', { id: '7c1', label: 'Up', children: ['8a', '8b'] });

StoryMap.set('8b', { id: '8b', label: 'Red Door', children: ['8b1'] });
StoryMap.set('8b1', { id: '8b1', label: '204', children: ['8b2a', '8b3a', '8b4a'], fontStyle: 'italic', fontColor: '#9b870c' });
StoryMap.set('8b2a', { id: '8b2a', label: 'Desk', children: ['8b2b'] });
StoryMap.set('8b2b', { id: '8b2b', label: 'Approach', children: ['8b2c'] });
StoryMap.set('8b2c', { id: '8b2c', label: 'Notebook', children: ['8b2d'] });
StoryMap.set('8b2d', { id: '8b2d', label: 'Open', children: ['8b2e'] });
StoryMap.set('8b2e', { id: '8b2e', label: 'IT\'S YOUR FAULT', children: ['8b2f'], font: 'TODO', isNarration: true });
StoryMap.set('8b2f', { id: '8b2f', label: 'IT\'S YOUR FAULT', children: ['8b2g'], font: 'TODO', isNarration: true });
StoryMap.set('8b2g', { id: '8b2g', label: 'IT\'S YOUR FAULT', children: ['8b2h'], font: 'TODO', isNarration: true });
StoryMap.set('8b2h', { id: '8b2h', label: 'IT\'S YOUR FAULT', children: ['8b2i'], font: 'TODO', isNarration: true });
StoryMap.set('8b2i', { id: '8b2i', label: 'IT\'S YOUR FAULT', children: ['8b2j'], font: 'TODO', isNarration: true });
StoryMap.set('8b2j', { id: '8b2j', label: 'IT\'S YOUR FAULT', children: ['8b2k'], font: 'TODO', isNarration: true });
StoryMap.set('8b2k', { id: '8b2k', label: 'IT\'S YOUR FAULT', children: ['8b2l'], font: 'TODO', isNarration: true });
StoryMap.set('8b2l', { id: '8b2l', label: 'IT\'S YOUR FAULT', children: ['8b2m'], font: 'TODO', isNarration: true });
StoryMap.set('8b2m', { id: '8b2m', label: 'IT\'S YOUR FAULT', children: ['8b4a'], font: 'TODO', isNarration: true });
StoryMap.set('8b3a', { id: '8b3a', label: 'Window', children: ['8b3b'] });
StoryMap.set('8b3b', { id: '8b3b', label: 'Distant Lights', children: ['8b3c'] });
StoryMap.set('8b3c', { id: '8b3c', label: 'Look Out', children: ['8b3e'] });
StoryMap.set('8b3e', { id: '8b3e', label: '*Honking*', children: ['8b3f'], isNarration: true });
StoryMap.set('8b3f', { id: '8b3f', label: '*Screeching*', children: ['8b3g'], isNarration: true });
StoryMap.set('8b3g', { id: '8b3g', label: '*Honking*', children: ['8b3h'], isNarration: true, fontSize: MED_FONT });
StoryMap.set('8b3h', { id: '8b3h', label: '*Screeching*', children: ['8b3i'], isNarration: true, fontSize: MED_FONT });
StoryMap.set('8b3i', { id: '8b3i', label: 'HONK!!', children: ['8b3j'], isNarration: true, fontSize: LG_FONT });
StoryMap.set('8b3j', { id: '8b3j', label: 'Run Out', children: ['8b4b'] });

StoryMap.set('8a', { id: '8a', label: 'Yellow Door', children: ['8a1'] });
StoryMap.set('8a1', { id: '8a1', label: '201', children: ['8a2'], fontStyle: 'italic', fontColor: '#9b870c' });
StoryMap.set('8a2', { id: '8a2', label: 'Enter', children: ['8a3', '8a4'] });
StoryMap.set('8a3', { id: '8a3', label: 'Lock', children: ['8a5'] });
StoryMap.set('8a4', { id: '8a4', label: 'Hide', children: ['8a5'] });
StoryMap.set('8a5', { id: '8a5', label: 'Laundry Room.', children: ['8a6'], isNarration: true });
StoryMap.set('8a6', { id: '8a6', label: '*Beeping*', children: ['8a7', '8a10'], isNarration: true, fontStyle: 'italic' });