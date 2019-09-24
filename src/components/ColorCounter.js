import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import { Button } from 'react-native-elements';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={()=>onIncrease()}
                    title={`Increaese ${color}`}
            />
            <Button onPress={()=>onDecrease()}
                    title={`Decreaese ${color}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default  ColorCounter;
