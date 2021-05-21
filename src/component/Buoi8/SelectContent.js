import React, { Component } from 'react'
import { Text, View,Image,StyleSheet, TouchableOpacity } from 'react-native'
import { Paper, Rock, Scissor } from '../../assets'




export default class SelectContent extends Component {
    render() {
        return this.props.arrayGame.map(item =>(
                <TouchableOpacity 
                disabled={this.props.disable}
                onPress={()=>{
                    this.props.selectItem(item);
                }}
                key={item.id} 
                style={[styles.borderItem,item.status && styles.selectedItem]}>
                   <Image style={styles.imageItem} source={item.image} />
                </TouchableOpacity>
            ));
    }
}

const styles = StyleSheet.create({
    imageItem:{
        width:50,
        height:50
    },
    borderItem:{
        backgroundColor: '#000',
        width: 80,
        height: 80,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    selectedItem:{
        borderColor: 'yellow',
        borderWidth: 3,
    }
})

