import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {LoveIcon,HahaIcon,SadIcon,LikeIcon,CareIcon,AngryIcon} from '../assets/index'
import IconButton from './IconButton'
export default class BtEmoji extends Component {
  state = {
    icon: LoveIcon,
  };
  arrayIcon=[LoveIcon,SadIcon,LikeIcon,AngryIcon,CareIcon,HahaIcon];
  handleOnPressIcon = icon => {
    //console.log('icon');
    this.setState({icon});
  };

  render() {
    return (
      <View style={styles.Container}>
        <Image source={this.state.icon} />
        <View style={styles.ButtonContainer}>
        <IconButton Image={LoveIcon} onPress={this.handleOnPressIcon}/>
        <IconButton Image={SadIcon} onPress={this.handleOnPressIcon}/>
        <IconButton Image={LikeIcon} onPress={this.handleOnPressIcon}/>
        <IconButton Image={AngryIcon} onPress={this.handleOnPressIcon}/>
        <IconButton Image={CareIcon} onPress={this.handleOnPressIcon}/>
        <IconButton Image={HahaIcon} onPress={this.handleOnPressIcon}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {
    marginTop: 50,
    flexDirection: 'row',
  },
  ButtonIcon: {
    marginHorizontal: 5,
    height: 50,
    width: 50,
  },
});