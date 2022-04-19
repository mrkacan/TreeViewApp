import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TreeItem from './src/components/TreeItem';
import TreeView from "./src/components/TreeView";

const TREE = [
    {
        id: 1,
        name: 'Parent A',
        isSelected: false,
        children: [

            {
                id: 124,
                name: 'Child 4'
            },
            {
                id: 124,
                name: 'Child 7',
            }
        ]
    },
    {
        id: 2,
        name: 'Parent B',
        isSelected: true,
        children: [
            {
                id: 22,
                name: 'Child 2',
                isSelected: true,
            },
            {
                id: 23,
                name: 'Child 3',
                isSelected: true,
            },
            {
                id: 24,
                name: 'Child 4',
                isSelected: true,
                children: [
                    {
                        id: 22,
                        name: 'Child 2',
                        isSelected: true,
                    },
                    {
                        id: 23,
                        name: 'Child 3',
                        isSelected: true,
                        children: [
                            {
                                id: 22,
                                name: 'Child 2',
                                isSelected: true,
                            },
                            {
                                id: 23,
                                name: 'Child 3',
                                isSelected: true,
                            },
                            {
                                id: 24,
                                name: 'Child 4',
                                isSelected: true,
                                children: [
                                    {
                                        id: 22,
                                        name: 'Child 2',
                                        isSelected: true,
                                    },
                                    {
                                        id: 23,
                                        name: 'Child 3',
                                        isSelected: true,
                                    },
                                    {
                                        id: 24,
                                        name: 'Child 4',
                                        isSelected: true,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 24,
                        name: 'Child 4',
                        isSelected: true,
                    }
                ]
            }
        ]
    }
];

export default function App() {
    return (
        <View style={styles.container}>
            <TreeView data={TREE} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },
});
