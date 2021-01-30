import { Size } from '../constants';

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
// isPartyScene: null,
// isVendingMachine: null,
// isEndingScene: null,

//NOTE: Ignoring font style because we changed our minds

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
StoryMap.set('2a2', { id: '2a2', label: 'Distant Noises', children: ['2a', '2b', '2c'], isNarration: true });
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
StoryMap.set('3a1e', { id: '3a1e', label: '06/04', children: ['3a1', '3a2'], isNarration: true, fontStyle: 'italic' });
StoryMap.set('3a2', { id: '3a2', label: 'Pills', children: ['3a2a', '3a2c'] });
StoryMap.set('3a2a', { id: '3a2a', label: 'Eat', children: ['3a2b'] });
StoryMap.set('3a2b', { id: '3a2b', label: 'Relaxed', children: ['4'], fontStyle: 'italic', isNarration: true });
StoryMap.set('3a2c', { id: '3a2c', label: 'Ignore', children: ['3a', '3b'] });

StoryMap.set('3b', { id: '3b', label: 'Wardrobe', children: ['3b1', '3b2'] });
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
StoryMap.set('8b3g', { id: '8b3g', label: '*Honking*', children: ['8b3h'], isNarration: true, fontSize: Size.MED_FONT });
StoryMap.set('8b3h', { id: '8b3h', label: '*Screeching*', children: ['8b3i'], isNarration: true, fontSize: Size.MED_FONT });
StoryMap.set('8b3i', { id: '8b3i', label: 'HONK!!', children: ['8b3j'], isNarration: true, fontSize: Size.LG_FONT });
StoryMap.set('8b3j', { id: '8b3j', label: 'Run Out', children: ['9c'] });
StoryMap.set('8b4a', { id: '8b4a', label: 'Leave', children: ['9c'] });

StoryMap.set('8a', { id: '8a', label: 'Yellow Door', children: ['8a1'] });
StoryMap.set('8a1', { id: '8a1', label: '201', children: ['8a2'], fontStyle: 'italic', fontColor: '#9b870c' });
StoryMap.set('8a2', { id: '8a2', label: 'Enter', children: ['8a3', '8a4'] });
StoryMap.set('8a3', { id: '8a3', label: 'Lock', children: ['8a5'] });
StoryMap.set('8a4', { id: '8a4', label: 'Hide', children: ['8a5'] });
StoryMap.set('8a5', { id: '8a5', label: 'Laundry Room.', children: ['8a6'], isNarration: true });
StoryMap.set('8a6', { id: '8a6', label: '*Beeping*', children: ['8a7', '8a10'], isNarration: true, fontStyle: 'italic' });
StoryMap.set('8a7', { id: '8a7', label: 'Vending Machine', children: ['8a8'] });
StoryMap.set('8a8', { id: '8a8', label: 'Use', children: ['8a9'], isVendingMachine: true });
StoryMap.set('8a9', { id: '8a9', label: 'Vending Machine Screen', children: ['8aa', '8ab', '8ac'], isNarration: true});
StoryMap.set('8aa', { id: '8aa', label: '\"Heh\"', children: ['9'], isNarration: true });
StoryMap.set('8ab', { id: '8ab', label: 'Hair Tie', children: ['9'], isNarration: true });
StoryMap.set('8ac', { id: '8ac', label: 'Nothing happened', children: ['8a10'], isNarration: true });
StoryMap.set('8a10', { id: '8a10', label: 'Laundry Machine', children: ['8a11'] });
StoryMap.set('8a11', { id: '8a11', label: 'Use', children: ['8a12'] });
StoryMap.set('8a12', { id: '8a12', label: 'Yellow Hoodie', children: ['9'], isNarration: true});
StoryMap.set('9', { id: '9', label: 'Check Hall', children: ['9a'] });
StoryMap.set('9a', { id: '9a', label: 'Nothing', children: ['9b'], isNarration: true });
StoryMap.set('9b', { id: '9b', label: 'Leave', children: ['8b', '9c'] });
StoryMap.set('9c', { id: '9c', label: 'Go upstairs', children: ['10'] });
StoryMap.set('10', { id: '10', label: 'Opened Door', children: ['11'], isNarration: true });
StoryMap.set('11', { id: '11', label: 'Music', children: ['12'], isNarration: true });
StoryMap.set('12', { id: '12', label: 'Approach', children: ['13'] });
StoryMap.set('13', { id: '13', label: '\"102\"', children: ['14'] });
StoryMap.set('14', { id: '14', label: 'Enter', children: ['15'], isPartyScene: true });
StoryMap.set('15', { id: '15', label: 'Party Scene 1', children: ['16a', '16b'], isNarration: true });
StoryMap.set('16a', { id: '16a', label: 'Take Drink', children: ['17'], isPartyScene: true });
StoryMap.set('16b', { id: '16b', label: 'Refuse', children: ['17'], isPartyScene: true });
StoryMap.set('17', { id: '17', label: 'Party Scene 2', children: ['18'], isNarration: true });
StoryMap.set('18', { id: '18', label: '*Whispers*', children: ['19'], isNarration: true, fontStyle: 'italic' });
StoryMap.set('19', { id: '19', label: 'Movement/Rustling', children: ['20'], isNarration: true });
StoryMap.set('20', { id: '20', label: 'Figure', children: ['21a', '21b'], isNarration: true });
StoryMap.set('21a', { id: '21a', label: 'Run Out', children: ['22'] });
StoryMap.set('21b', { id: '21b', label: 'Attack', savePoint: ['15'], isDeath: true });
StoryMap.set('22', { id: '22', label: 'Stairs', children: ['23a', '23b'] });
StoryMap.set('23a', { id: '23a', label: 'Down', children: ['23a1'] });
StoryMap.set('23a1', { id: '23a1', label: 'Dead End', children: ['23b'], isNarration: true });
StoryMap.set('23b', { id: '23b', label: 'Up', children: ['24'] });
StoryMap.set('24', { id: '24', label: '\"HELP!\"', children: ['25', '26'], isNarration: true });

// Bad Ending Path
StoryMap.set('25', { id: '25', label: 'Hide', children: ['25a'] });
StoryMap.set('25a', { id: '25a', label: 'Empty Room', children: ['25b'], isNarration: true });
StoryMap.set('25b', { id: '25b', label: 'Lock Door', children: ['25c'] });
StoryMap.set('25c', { id: '25c', label: 'Footsetps Close', children: ['25d'], isNarration: true });
StoryMap.set('25d', { id: '25d', label: 'Knock', children: ['25e'], isNarration: true });
StoryMap.set('25e', { id: '25e', label: 'Knock', children: ['25f'], isNarration: true, fontSize: Size.MED_FONT });
StoryMap.set('25f', { id: '25f', label: 'Knock', children: ['25g'], isNarration: true, fontSize: Size.LG_FONT });
StoryMap.set('25g', { id: '25g', label: 'YOU COWARD', children: ['25h'], fontStyle: 'italic' });
StoryMap.set('25h', { id: '25h', label: 'Panic', children: ['25i'] });
StoryMap.set('25i', { id: '25i', label: 'Suffocating', children: ['25i1', '25i4'], isNarration: true });
StoryMap.set('25i1', { id: '25i1', label: 'Breathe', children: ['25i2'] });
StoryMap.set('25i2', { id: '25i2', label: 'Breathe', children: ['25i3'], isNarration: true });
StoryMap.set('25i3', { id: '25i3', label: 'Breathe', children: ['25j'], isNarration: true });
StoryMap.set('25i4', { id: '25i4', label: 'Run Out', savePoint: ['25'], isDeath: true })
StoryMap.set('25j', { id: '25j', label: 'Find Person', children: ['25k'] });
StoryMap.set('25k', { id: '25k', label: 'Room 302', children: ['25l'], fontStyle: 'italic' });
StoryMap.set('25l', { id: '25l', label: 'Enter', children: ['25m'] });
StoryMap.set('25m', { id: '25m', label: 'Person', children: ['25n'], isNarration: true });
StoryMap.set('25n', { id: '25n', label: 'Hanging', children: ['25o'], isNarration: true });
StoryMap.set('25o', { id: '25o', label: 'Dead', children: ['25p'], isNarration: true });
StoryMap.set('25p', { id: '25p', label: 'Search Room', children: ['25q'] });
StoryMap.set('25q', { id: '25q', label: 'Bedsheets', children: ['25r'] });
StoryMap.set('25r', { id: '25r', label: 'Window', children: ['25s', '25s1'] });
StoryMap.set('25s', { id: '25s', label: 'Escape Window', children: ['25t'] });
StoryMap.set('25s1', { id: '25s1', label: 'Leave Room', children: ['25s2'] });
StoryMap.set('25s2', { id: '25s2', label: 'Figure', savePoint: ['25l'], isDeath: true });
StoryMap.set('25t', { id: '25t', label: 'Fall', children: ['25u'], isNarration: true });
StoryMap.set('25u', { id: '25u', label: 'Legs Broken', children: ['25v'], isNarration: true });
StoryMap.set('25v', { id: '25v', label: 'Crawl Away', children: ['25w'], savePoint: ['1'], isEndingScene: true });

// Good Ending Path
StoryMap.set('26', { id: '26', label: 'Find', children: ['26a'] });
StoryMap.set('26a', { id: '26a', label: 'Room 302', children: ['26b'], isNarration: true });
StoryMap.set('26b', { id: '26b', label: 'Enter', children: ['26c'] });
StoryMap.set('26c', { id: '26c', label: 'Person', children: ['26d'], isNarration: true });
StoryMap.set('26d', { id: '26d', label: 'Hanging', children: ['26e'], isNarration: true });
StoryMap.set('26e', { id: '26e', label: 'Struggling', children: ['26f'], isNarration: true });
StoryMap.set('26f', { id: '26f', label: 'Save', children: ['26g'] });
StoryMap.set('26g', { id: '26g', label: 'Dead', children: ['27', '30'], isNarration: true });
StoryMap.set('27', { id: '27', label: 'Search Body', children: ['28'] });
StoryMap.set('28', { id: '28', label: 'Keys', children: ['33', '28a'] });
StoryMap.set('28a', { id: '28a', label: 'Search Room', children: ['28b'] });
StoryMap.set('28b', { id: '28b', label: 'Bedsheets', children: ['28c'] });
StoryMap.set('28c', { id: '28c', label: 'Window', children: ['33', '29'] });
StoryMap.set('29', { id: '29', label: 'Escape Window', children: ['29a'] });
StoryMap.set('29a', { id: '29a', label: 'Fall', children: ['29b'], isNarration: true });
StoryMap.set('29b', { id: '29b', label: 'Legs Broken', children: ['29c'], isNarration: true });
StoryMap.set('29c', { id: '29c', label: 'Crawl Away', children: ['25w'] });
StoryMap.set('30', { id: '30', label: 'Search Room', children: ['30a'] });
StoryMap.set('30a', { id: '30a', label: 'Bedsheets', children: ['30b'] });
StoryMap.set('30b', { id: '30b', label: 'Window', children: ['29', '31'] });
StoryMap.set('31', { id: '31', label: 'Search Body', children: ['32'] });
StoryMap.set('32', { id: '32', label: 'Keys', children: ['33'] });
StoryMap.set('33', { id: '33', label: 'Leave Room', children: ['33a', '33b'] });
StoryMap.set('33a', { id: '33a', label: 'Stairs', children: ['33a1'] });
StoryMap.set('33a1', { id: '33a1', label: 'Down', children: ['33a2'] });
StoryMap.set('33a2', { id: '33a2', label: 'Figure', savePoint: ['26a'], isDeath: true });
StoryMap.set('33b', { id: '33b', label: 'Elevator', children: ['33b1'] });
StoryMap.set('33b1', { id: '33b1', label: 'Use Key', children: ['33b2'] });
StoryMap.set('33b2', { id: '33b2', label: 'Use Elevator', children: ['33b3'] });
StoryMap.set('33b3', { id: '33b3', label: '1F', children: ['33b4'], isNarration: true });
StoryMap.set('33b4', { id: '33b4', label: 'Exit Building', children: ['33b5'] });
StoryMap.set('33b5', { id: '33b5', label: 'Red Car', children: ['34a', '34b'] });
StoryMap.set('34a', { id: '34a', label: 'Run Away', children: ['35'], savePoint: ['1'], isEndingScene: true });
StoryMap.set('34b', { id: '34b', label: 'Drive Away', children: ['25w'], savePoint: ['1'], isEndingScene: true });