import React from 'react';
import { View, Text, Button } from 'react-native';
import Node from './Node';

// font: null, 
// fontColor: null,
// fontSize: null,
// fontWeight: null,
// isNarration: null, 
// savePoint: null, 

/** This file contains the story in a map format. The data structure is a tree.
 *  Given an id, it will return the corresponding node */
const storyMap = new Map();
storyMap.set('0', { label: 'Choose.', children: ['00', '01'] });
storyMap.set('00', { label: 'Sleep' })
storyMap.set('01', { label: 'Wake' });

export default Tree = ({id}) => {
    let node = storyMap.find(id); 
    return node;
}