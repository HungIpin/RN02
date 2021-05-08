import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import randomColor from 'randomcolor';
export default class DemoFlatList extends Component {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    renderItem = ({item}) => (
        <View style={[styles.item, { backgroundColor: randomColor() }]}>
            <Text>Flatlist {item}</Text>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.item}>
                    <Text> text </Text>
                </View> */}
                <FlatList
                // lam diem carousel
                    horizontal={true} 
                    data={this.array}
                    keyExtractor={(item) => { return item.toString() }}
                    renderItem={this.renderItem}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    item: {
        width:100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bbb',
        marginBottom: 10
    }
})
