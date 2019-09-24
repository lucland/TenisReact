import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>BoxScreen #1</Text>
        <Text style={styles.textStyle}>BoxScreen #2</Text>
        <Text style={styles.textStyle}>BoxScreen #3</Text>
        <Text style={styles.textStyle}>BoxScreen #4</Text>
        <View style={styles.viewOneStyle}/>
        <View style={styles.viewTwoStyle}/>
        <View style={styles.viewThreeStyle}/>
    </View>;
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        margin: 8,
        justifyContent: 'space-between',
        //"space-around', 'center', 'flex-start', 'flex-end', 'space-between'
        //flexDirection: 'row',
        //'row' bota os itens em linha, default é column
        height:200,
        alignItems: 'stretch'
        //pode ser 'flex-start', 'flex-end', 'center' ou 'stretch' (default)
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'blue'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;
