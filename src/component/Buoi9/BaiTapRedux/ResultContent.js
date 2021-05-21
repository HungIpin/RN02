import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'

export default class ResultContent extends Component {
    render() {
        return (
            <View>
                <View style={styles.infoContent}>
                <Text style={styles.textContent}>Score: {this.props.score}</Text>
                <Text style={styles.textContent}>Times: {this.props.times}</Text>
                </View>
                <View style={styles.buttonContent}>
                        <TouchableOpacity 
                        disabled={this.props.disable}
                        onPress={this.props.onPressPlayButton}
                        style={[styles.buttonPlay,
                        this.props.disable &&{backgroundColor:'#bbb'}]}>
                            <Text style={styles.buttonTxt}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonReset}>
                            <Text style={styles.buttonTxt}>Reset</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textContent:{
        color:'#00fecd',
        fontSize:25,
        fontWeight:'bold'
        
    },
    buttonPlay:{
        height:50,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff9aff',
        borderRadius:8,
        marginRight:10
    },
    buttonReset:{
        height:50,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fecd34',
        borderRadius:8
    },
    buttonTxt:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    },
    buttonContent: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    infoContent: {
        flex: 1,
        alignItems:'center'
    },
})
