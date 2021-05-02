import React, { Component } from 'react'
import { Text, View,StyleSheet, Button,TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback } from 'react-native'

export default class Touched extends Component {
    handleOnPress=param=>
    {
        console.log(param);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                {/* call back để hàm chỉ chạy khi nhân nút */}
                <TouchableOpacity activeOpacity={0.5} style={styles.Button} onPress={()=>{this.handleOnPress('RN02')}}> 
                    <Text style={styles.TextButton}>Button</Text>
                </TouchableOpacity>
                <TouchableHighlight underlayColor="red" style={styles.Button} onPress={this.handleOnPress}>
                <Text style={styles.TextButton}>Button Hightligt</Text>
                </TouchableHighlight>
                <TouchableWithoutFeedback style={styles.Button} onPress={this.handleOnPress}>
                <Text style={styles.TextButton}>Button Without Feedback</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
//rns
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       alignItems:'center'
    },
    Button:{
        backgroundColor:'#bfb',
        paddingVertical:10,
        paddingHorizontal:20,
        margin:15
    },
    TextButton:{
        fontSize:20
    }
});
