import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

 export class Buoi3 extends Component{
    render(){
        return(
    <View style={style.container}>
      <View style={style.box1}>
        <View style={[style.item,style.item1]}></View>
        <View style={style.item}></View>
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
    box1:{
      flex:1,
      backgroundColor:'#bfb',
      marginBottom:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      padding:20
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
