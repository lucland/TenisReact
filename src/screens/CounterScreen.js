import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button } from 'react-native-elements';

const AMOUNT = 1;
const reducer = (state, action) => {
 //state === {count: number}
 //action === {type: 'increment' || 'decrement', payload: 1}
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        default:
            return state;
    }
};
const CounterScreen = () => {
const [state, dispatch] = useReducer(reducer, {count: 0});

    return <View>
        <Button
            title="Increase"
            onPress={()=>{
dispatch({type: 'increment', payload: AMOUNT })
            }}
            type="outline"
        />
        <Button
            title="Decrease"
            onPress={()=>{
dispatch({type: 'decrement', payload: AMOUNT})
            }}
            type="outline"
        />
        <Text>Current Count: {state.count} </Text>
    </View>
};

const styles = StyleSheet.create({});

export default  CounterScreen;
