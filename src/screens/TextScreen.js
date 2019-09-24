import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');

return(
    <View>
<Text>Enter Password:</Text>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            keyboardType={"number-pad"}
            value={password}
            onChangeText={(newValue)=>setPassword(newValue)}
        />
        {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
);
};

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default  TextScreen;
