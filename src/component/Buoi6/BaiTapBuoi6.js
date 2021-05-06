import randomColor from 'randomcolor';
import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'

export default class BaiTapBuoi6 extends Component {
    array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    
    renderItem=()=>{
        return this.array.map(item =>(
            <View style={[styles.item,
            {backgroundColor:randomColor()}]
            } key={item}>
                    <Text>Text {item}</Text>
                </View>
        ));
    }

    render() {
        var color = randomColor();
        randomColor({
            luminosity: 'random',
            hue: 'random',
            count:'14'
         });
        return (
            <View style={styles.scrennContainer}>
                <ScrollView>
                    {this.renderItem()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrennContainer:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:50,
    },
    item:{
        height:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fbf',
        marginBottom:8,
    }
})
