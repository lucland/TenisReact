import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({navigation}) => {
  return( <View>
    <Text style={styles.text}>Mercantis Mobile</Text>
      <Button
          icon={
              <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
              />
          }
          iconRight
          onPress={()=> navigation.navigate('Components')}
          title="Go to Components"/>
          <Button
          onPress={()=>navigation.navigate('List')}
          title="Go to List Demo"
          type="outline"
          />
          <Button
              onPress={()=>navigation.navigate('Image')}
              title="Go to Image Demo"
          />
          <Button
              onPress={()=>navigation.navigate('Counter')}
              title="Go to Counter Demo"
          />
          <Button
              onPress={()=>navigation.navigate('Color')}
              title="Go to Color Demo"
          />
          <Button
              onPress={()=>navigation.navigate('Square')}
              title="Go to Square Demo"
              icon={
                  <Icon
                      name="arrow-right"
                      size={15}
                      color="red"
                  />
              }
              iconLeft
          />
          <Button
              onPress={()=>navigation.navigate('Text')}
              title="Go to Text Demo"
          />
          <Button
              onPress={()=>navigation.navigate('Box')}
              title="Go to Box Demo"
          />
          <TouchableOpacity
              onPress={()=>navigation.navigate('List')}>
              <Text>Go to LIST</Text>
              <Text>Go to LIST</Text>
              <Text>Go to LIST</Text>
              <Text>Go to LIST</Text>
              <Text>Go to LIST</Text>
              <Text>Go to LIST</Text>
          </TouchableOpacity>
  </View>
  );
      };

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

