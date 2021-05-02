import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import IconButton from './IconButton'
import flatListData from './flatListData'

class FlatListItem extends Component{
    render(){
        return(
            <View style={styles.Container}>
            <View style={styles.RowContainer}>
                {/* <Text>{this.props.item.name}</Text> */}
                <IconButton icon={{uri: this.props.item.imgdata}} />
            </View>
            </View>
        );
    }
}
export default class RenderIcon extends Component {
    state ={
        icon:require('../assets/images/love.png'),
    };
    handleOnPressIcon = (icon)=>{
        this.setState({
            icon:icon
        })
    }
        
    
    render() {
       
        return (
            <>
            <View style={styles.Container}>
            <Image source={this.state.icon} style={styles.MainImg}/>
                <View style={styles.RowContainer} >
                <FlatList 
                data={flatListData}
                renderItem={({item,index})=>{
                    return(<FlatListItem  item = {item} index = {index}>

                    </FlatListItem>)
                }}
                >
                </FlatList>
                </View>
            </View>
        </>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    RowContainer:{
        flexDirection:'row',
        margin:15
    },
    Img:{
        width:50,
        height:50,
        margin:5
    },
    MainImg:{
        width:200,
        height:200
    },
})
