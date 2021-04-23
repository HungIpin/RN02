import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class ItemTop extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Text> ItemTop </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item:{
    backgroundColor:'#ffcc00',
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
    }
});
