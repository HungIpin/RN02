import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity, Touchable } from 'react-native'

export default class RenderWithState extends Component {
   // Sử dụng constructor để khai báo state
    // constructor(props){
    //     super(props);
    //     this.state={
    //         isLogin:false,
    //     };
    // }
    
    // Khai báo State rút rọn
    state ={
        isLogin:false,
    };
    handleLogin = ()=>{
        this.setState({
            isLogin: true
        },
        //log giá trị sau khi được thực thi 
        ()=>{
            console.log(this.state.isLogin);
        },
        );
        
    };

    handleLogout = ()=>{
        this.setState({
            isLogin: false
        },
        ()=>{
            console.log(this.state.isLogin);
        },
        );
    };

    renderLogin = ()=>{
        if(this.state.isLogin){
            return(
            <>
                <Text style={styles.TextStyle}>Hello React Native 02</Text>
                <TouchableOpacity style={styles.Button} onPress={this.handleLogout}>
                <Text style={styles.TextStyle}>Log out</Text>
                </TouchableOpacity>
            </>
                
            )}
        return(
            <TouchableOpacity style={styles.Button} onPress={this.handleLogin}>
                    <Text style={styles.TextStyle}>Log in</Text>
                </TouchableOpacity>
            );
        
    };
    render() {
        return (
            <View style={styles.Container}>
                {this.renderLogin()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Button:{
        backgroundColor:'#bbf',
        paddingHorizontal:25,
        paddingVertical:15,
        borderRadius:8,
    },
    TextStyle:{
        fontSize:20,
        fontWeight:'bold',
    }
})

