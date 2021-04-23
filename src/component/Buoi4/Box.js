import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native';

export default class Box extends Component {
    render() {
        return (
            <View style={styles.row}></View>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
      }
});