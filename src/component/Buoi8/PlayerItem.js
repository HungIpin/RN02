import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import { BackgroundImage, Paper, Player,Bot,Scissor, Rock } from '../../assets'
export default class PlayerItem extends Component {

    render() {
        console.log(this.props) 
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.boxImage}>
                    <Image style={styles.imageGame} source={this.props.imageGame} />
                </View>
                <View style={styles.triangle}></View>
                <Image style={styles.imageGame} source={this.props.imagePlayer} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    playerContainer:{
        alignItems:'center'
    },
    playerContent: {
        flex: 2,
        paddingHorizontal: 20,
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageGame: {
        height: 90,
        width: 90,

    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderTopWidth: 12,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'yellow'
    },
    boxImage: {
        backgroundColor: '#000',
        width: 100,
        height: 100,
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 10,
        
    },
})

