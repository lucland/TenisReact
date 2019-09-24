import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT =15;

const SquareScreenNoReducer = () => {
    const[red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const[blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        //color == 'red', 'green' or 'blue'
        //change == COLOR_INCREMENT

        switch (color){
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change);
                console.log(blue);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green+change);
                console.log(green);
                return;
            default:
                return;
        }
    };

    return <View>


        <ColorCounter onIncrease={()=>{
            if (red + COLOR_INCREMENT > 255) {
                console.log(red);
                return;

            }
            setRed(red + COLOR_INCREMENT )
        }}
                      onDecrease={()=>{
                          if (red - COLOR_INCREMENT < 1) {
                              return;
                          }
                          setRed(red - COLOR_INCREMENT )
                      }}
                      color="Red"
        />


        <ColorCounter onIncrease={()=>setColor('blue', COLOR_INCREMENT )}
                      onDecrease={()=>setColor('blue', -1 *  COLOR_INCREMENT )}
                      color="Blue"
        />
        <ColorCounter onIncrease={()=>setColor('green', COLOR_INCREMENT )}
                      onDecrease={()=>setColor('green', -1 * COLOR_INCREMENT )}
                      color="Green"
        />
        <View style={{height: 150, width:150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>;
};
const styles = StyleSheet.create({});

export default  SquareScreenNoReducer;
