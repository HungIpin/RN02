import React, { Component } from 'react'
import { View,StyleSheet,TouchableOpacity,Image,Text } from 'react-native'

export default class IconButton extends Component {
    render() {
        return (
            <View style={styles.row}>
            <TouchableOpacity style={styles.item}>
                 <Image  source={this.props.icon} style={styles.Img}/> 
            {/* <Text style={styles.TextIcon}>{this.props.icon}</Text> */}
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Img:{
        width:50,
        height:50,
        margin:5,
    },
    TextIcon:{
        fontSize:25,
        margin:5
    },
    item:{
        flex:1,
        flexDirection:'row'
    }
})
