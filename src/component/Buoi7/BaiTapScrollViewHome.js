import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'
import randomColor from 'randomcolor';
export default class BaiTapScrollViewHome extends Component {
    array=[1,2,3,4,5,6,7,8,9,10]

    renderItem=()=>{
        return this.array.map((item,index)=>{
            return (
                <View style={[styles.item,
                    {backgroundColor:randomColor()}]} key={index}>
                    <Text>item{item}</Text>
                </View>
            )
        })
    }

    render() {
        return (
           <ScrollView style={styles.container}>{this.renderItem()}</ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:50
    },
    item:{
        height:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#bbb',
        marginBottom:10
    }
})
