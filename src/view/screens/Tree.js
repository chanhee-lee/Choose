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
            id: 'Parent1',
            name: 'Parent1',
            children: [
                {
                    id: 'child1',
                    name: 'child1',
                    children: [
                        {
                            id: 'child11',
                            name: 'child11',
                            children: [
                                {
                                    id: 'child111',
                                    name: 'child111',
                                },
                            ],
                        },
                        {
                            id: 'child12',
                            name: 'child12',
                        },
                    ],
                },
            ],
        },
        {
            id: 'Parent2',
            name: 'Parent2',
            children: [
                {
                    id: 'child2',
                    name: 'child2',
                    children: [
                        {
                            id: 'child21',
                            name: 'child21',
                        },
                        {
                            id: 'child22',
                            name: 'child22',
                        },
                    ],
                },
            ],
        },
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
