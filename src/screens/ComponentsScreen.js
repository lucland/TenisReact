import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { LinearGradient } from 'expo-linear-gradient';

const ComponentsScreen = ({navigation}) => {
    const items = [
        { name: 'COLOR', code: '#1abc9c', page: 'Color' }, { name: 'LIST', code: '#2ecc71', page: 'List' },
        { name: 'BOX', code: '#3498db', page: 'Box' }, { name: 'IMAGE', code: '#9b59b6', page: 'Image' },
        { name: 'SQUARE', code: '#34495e', page: 'Square' }, { name: 'COUNTER', code: '#16a085', page: 'Counter' },
        { name: 'TEXT', code: '#27ae60', page: 'Text' }, { name: 'HOME', code: '#2980b9', page: 'Home' }
    ];

    return (
        <FlatGrid
            itemDimension={180}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    onPress={()=>navigation.navigate(`${item.page}`)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>{item.code}</Text>
                </View>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 30
    },
    gridView: {
       // marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 180,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

export default  ComponentsScreen;
