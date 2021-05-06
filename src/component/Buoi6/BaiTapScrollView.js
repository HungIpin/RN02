import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'

export default class BaiTapScrollView extends Component {
    array = [1,2,3,4,5,6,7,8,9,10];

    renderItem=()=>{
        return this.array.map(item =>(
            <View style={styles.item} key={item}>
                    <Text>Text {item}</Text>
                </View>
        ));
    }

    render() {
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
        marginBottom:8
    }
})
