import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import TickIcon from "../../../assets/Tick";

type TreeItemProps = {
    isSelected: boolean;
    text: string;
}

const TreeItem: React.FC<TreeItemProps> = ({
                                               isSelected,
                                               text,
                                           }) => {
    return <Pressable style={styles.wrapper}>
        <View style={styles.tickWrapper}>
            {isSelected ? <TickIcon width={15} height={15} color={"#088ab9"}/> : null}
        </View>
        <Text style={styles.text}>
            {text}
        </Text>
    </Pressable>
}

export default TreeItem;
