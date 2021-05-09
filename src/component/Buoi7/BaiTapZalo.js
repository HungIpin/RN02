import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Image, Touchable, TouchableOpacity } from 'react-native'
import dataBuoi7 from './dataBuoi7'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Entypo'
class FlatListItemRow extends Component{
    render(){
        return(
            <>
            <View style={styles.item}>
                <Image style={styles.img} source={{uri:this.props.item.imgdata}}/>
                <Text>{this.props.item.name}</Text>
            </View>
            </>
        );
    }
}
class FlatListItemColumn extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:'#cfcfcf',marginBottom:12,borderRadius:10}}>
                <Image style={styles.imgcolumn} source={{uri:this.props.item.imgdata}}></Image>
                <View style={styles.txtwrap}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.item.name}</Text>
                    <Text>15 bạn chung</Text>
                </View>
                <TouchableOpacity style={{justifyContent:'center'}}>
                    <View style={styles.btnkb}>
                    <Text>Kết bạn</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            
        );
    }
}

export default class BaiTapZalo extends Component {
    render() {
        return (
            <>
            <Text style={styles.txt}><Icon1 name="back-in-time" size={22} color="#000" /> Danh sách tìm kiếm gần đây</Text>
            <View style={styles.container}>
                <FlatList
                horizontal={true}
                data={dataBuoi7}
                renderItem={({item,index})=>{
                    return(
                        <FlatListItemRow item={item} index={index}>

                        </FlatListItemRow>
                    );
                }}
                />
            </View>
            <Text style={styles.txt}><Icon name="user-friends" size={20} color="#000" /> Gợi ý kết bạn</Text>
            <View style={styles.container2}>
                <FlatList
                horizontal={false}
                data={dataBuoi7}
                renderItem={({item,index})=>{
                return(
                    <FlatListItemColumn item={item} index={index}>

                    </FlatListItemColumn>
                );
                }}
            />
        </View>
        </>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
       
        
    },
    btnkb:{
        width:100,
        height:50,
        backgroundColor:'#bbf',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginRight:10
    },
    container2:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:20,
        
    },
    txt:{
        padding:20,
        fontWeight:'bold',
        fontSize:20,
        
    },
    item:{
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center'
        
    },
    item2:{
        flex:1
        
    },
    img:{
        height:80,
        width:80,
        borderRadius:80,
        flex:1
    },
    imgcolumn:{
        width:100,
        height:100,
        margin:5,
        borderRadius:100
    },
    txtwrap:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        paddingLeft:8
    }
})
