import React, { Component } from 'react'
import { Text, View,StyleSheet, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class DemoSectionList extends Component {
    DATA = [
        {
          title: "Main dishes",
          data: ["Pizza", "Burger", "Risotto"]
        },
        {
          title: "Sides",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
          title: "Drinks",
          data: ["Water", "Coke", "Beer"]
        },
        {
          title: "Desserts",
          data: ["Cheese Cake", "Ice Cream"]
        },{
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
          {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
          }
      ];
    
    renderItem=({item})=>(
        <View style={styles.itemContent}>
            <Text style={styles.itemTxt}>{item}</Text>
        </View>
    )

    renderSectionHeader=({section:{title}})=>{
        return <Text style={styles.headertxt}>{title}<Icon name="star" size={30} color="#900" /></Text>
    };

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    sections={this.DATA}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    keyExtractor={(item,index)=>index.toString()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    itemTxt:{
        fontSize:20
    },
    itemContent:{
        padding:15
    },
    headertxt:{
        fontSize:24,
        fontWeight:'bold',
        backgroundColor:'#cfcfcf'
    }
})

