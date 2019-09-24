import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button } from 'react-native-elements';

const CounterScreenNoCounter = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button
            title="Increase"
            onPress={()=>
            {setCounter(counter+1);
            }}
            type="outline"
        />
        <Button
            title="Decrease"
            onPress={()=>
            {setCounter(counter-1);
            }}
            type="outline"
        />
        <Text>Current Count: {counter}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default  CounterScreenNoCounter;
