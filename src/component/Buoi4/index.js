import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import ItemTop from './ItemTop';
import Box from './Box'
 export class Buoi4 extends Component{
    render(){
        const textAvatar = 'React Native 02 Cao Thang';
        const iShowHide = false;
        return(
    <View style={style.container}>
      <View style={style.box1}>
          {iShowHide ?(<Image style={style.image}
            source={require('./thanh-bieu-cam-cho-husky.jpg')}
        />):(<Text>Image Hide</Text>)}
        
        <Text style={style.text}>{textAvatar}</Text>
      </View>
      <View style={style.box2}>
        <View style={[style.row,style.row1]}>
          <View style={style.itemvuong}></View>
          <View style={style.itemvuong}></View>
        </View>
        <View style={style.row}>
        <View style={style.itemvuong}></View>
        <View style={style.itemvuong}></View>
        </View>
      </View>
    </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
      flex:1
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        borderWidth:5,
        borderColor:'#000'
    },
    text:{
        fontSize:18,
        fontWeight: 'bold',
        color:'blue'
    },
    box1:{
      flex:1,
      backgroundColor:'#bfb',
      marginBottom:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      padding:20,
      justifyContent:'center',
      alignItems:'center',
      
    },
  box2:{
    flex:1,
    backgroundColor:'#b3b3ff',
    borderTopLeftRadius:20,
      borderTopRightRadius:20,
      padding:20
  },
  item:{
    backgroundColor:'#ffcc00',
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  item1:{
    marginBottom:70
  },
  itemvuong:{
    backgroundColor:'blue',
    width:150,
    height:150,
    borderRadius:20
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  row1:{
    marginBottom:20
  }
  });
