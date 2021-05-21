import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { countUp,countDown } from './redux/actions/countAction';

class DemoRedux extends Component {
    CountUp = ()=>{
        console.log('up')
    };
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text> DemoRedux </Text>
                <Text style={styles.txtStyle}>Number :{this.props.number}</Text>
                <Text style={styles.txtStyle}>User Name :{this.props.userName}</Text>
                <View style={styles.btnContainer}>
                <TouchableOpacity onPress={this.props.countUp}>
                    <Text>Count Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.countDown}>
                    <Text>Count Down</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:20,
        width:'100%'
    },
    txtStyle:{
        fontSize:24,
    }
})

const mapStateToProp = state =>{
    return{
        number: state.countReducer.number,
        userName: state.userReducer.userName,
    }
}

const mapDispactchToProp = dispatch=>{
    return{
        countUp: ()=>
        dispatch(countUp(20)),
        countDown: ()=>
        dispatch(countDown(3))
    }
};

export default connect(mapStateToProp,mapDispactchToProp)(DemoRedux);