import React from 'react';
import { View, Text, Button } from 'react-native';

// id
// label
// children
// font: null, 
// fontColor: null,
// fontSize: null,
// fontWeight: null,
// isNarration: null, 
// savePoint: null, 
// timer: null,

/** This file contains the story in a map format. The data structure is a tree.
 *  Given an id, it will return the corresponding node */
export default StoryMap = new Map();
StoryMap.set('0', { id: '0', label: 'Choose.', children: ['00', '01'] });
StoryMap.set('00', { id: '00', label: 'Sleep' })
StoryMap.set('01', { id: '01', label: 'Wake' });