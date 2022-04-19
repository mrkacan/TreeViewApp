import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import TreeItem from "../TreeItem";

export type Item = {
    id: number;
    name: string;
    isSelected: boolean;
    children: any[]
}

type TreeViewProps = {
    data: Item[];
}

const TreeView: React.FC<TreeViewProps> = ({data}) => {
    const renderTree = (data: Item[], isChildren: boolean) => {
        const treeData = data.map((item) => {
            return <View style={{marginLeft: isChildren ? 25 : 0}}>
                <TreeItem text={item?.name} isSelected={item.isSelected}/>
                {item?.children ? renderTree(item.children, !!item.children) : null}
            </View>
        })

        return treeData;
    }


    return (
        <View style={styles.container}>
            {renderTree(data, false)}
        </View>
    );
}

export default TreeView;
