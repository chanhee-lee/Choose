// React Native Tree View for Android and IOS devices
// https://aboutreact.com/react-native-final-tree-view/

// import React in our code
import React from 'react';
// import all the components we are going to use
import { SafeAreaView, Text, View } from 'react-native';

//import library for the TreeView
import TreeView from 'react-native-final-tree-view';

//Dummy data for the Tree View
const state = {
    data: [
        {
            id: '0',
            name: 'Choose.',
            // font: null, 
            // fontColor: null,
            // fontSize: null,
            // fontWeight: null,
            // isNarration: null, 
            // savePoint: null, 
            children: [
                {
                    id: '00',
                    name: 'Sleep',
                    children: [{id: '00', name: 'Sleep'}]
                },
                {
                    id: '01',
                    name: 'Wake',
                    children: [
                        {
                            id: "010", 
                            name: "window",
                            children: [
                                {
                                    id: "0100",
                                    name: "dark"
                                }
                            ]
                        },
                        {
                            id:"011",
                            name: "door",
                            children: [
                                {
                                    id: "0110",
                                    name: "locked",
                                    children: [
                                        {
                                            id: "01100",
                                            name:  "drawer"
                                        },
                                        {
                                            id: "01101",
                                            name: "wardrobe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ],
        }
    ],
};

const getIndicator = (isExpanded, hasChildrenNodes) => {
    if (!hasChildrenNodes) {
        return '*';
    } else if (isExpanded) {
        return '-';
    } else {
        return '+';
    }
};

const Tree = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 10 }}>
                <TreeView
                    data={state.data}
                    renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                        return (
                            <View>
                                <Text
                                    style={{
                                        marginLeft: 25 * level,
                                        fontSize: 18,
                                    }}>
                                    {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Tree;
