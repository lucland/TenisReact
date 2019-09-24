import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'test List #1', age: 20},
        {name: 'test List #2', age: 21},
        {name: 'test List #3', age: 22},
        {name: 'test List #4', age: 23},
        {name: 'test List #5', age: 24},
        {name: 'test List #6', age: 25},
        {name: 'test List #7', age: 26},
        {name: 'test List #8', age: 27},
        {name: 'test List #9', age: 28},
        {name: 'test List #11', age: 29},
        {name: 'test List #12', age: 30},
        {name: 'test List #13', age: 31},
        {name: 'test List #14', age: 32},
        {name: 'test List #15', age: 33},
        {name: 'test List #16', age: 34},
        {name: 'test List #17', age: 35},
        ];

    return(
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            refresh={true}
            renderItem={({item}) => {
                return <View><Text style={styles.textStyle}>{item.name} - Age {item.age}</Text></View>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical:15
    }
});

export default ListScreen;

