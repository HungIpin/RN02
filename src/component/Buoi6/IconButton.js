import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export default class IconButton extends Component {




    render() {
        return (

            <TouchableOpacity
                onPress={() => this.props.onPress(this.props.Image)}
                style={styles.item}>
                <Image source={this.props.Image} style={styles.Img} />
                {/* <Text style={styles.TextIcon}>{this.props.icon}</Text> */}
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    Img: {
        width: 50,
        height: 50,
        margin: 5,
    },
    TextIcon: {
        fontSize: 25,
        margin: 5
    },
    item: {
        flex: 1,
        flexDirection: 'row'
    }
})
