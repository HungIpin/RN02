import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, StatusBar, Touchable, TouchableOpacity } from 'react-native'
import { BackgroundImage, Paper, Player, Bot, Scissor, Rock } from '../../assets'
import LinearGradient from 'react-native-linear-gradient';
import PlayerItem from './PlayerItem';
import SelectContent from './SelectContent';
import ResultContent from './ResultContent'
export default class BaiTapOanTuXi extends Component {
    state = {
        disable:false,
        playerSelect: { id: 'paper', image: Paper, status: true },
        botSelect: { id: 'rock', image: Rock, status: false },
        arrayGame: [{ id: 'scissor', image: Scissor, status: false }, { id: 'rock', image: Rock, status: false }, { id: 'paper', image: Paper, status: true }],
        score:0,
        times:9,
    };
    
    onSelectItem = selectItem => {
        // console.log(selectItem)
        // const newArray = [...this.state.arrayGame];
        // const index = newArray.findIndex(item => item.id === selectItem.id)
        // newArray[index].status = true;
        // console.log(newArray)
        // this.setState({ playerImage: newArray[index].image })
        const arrayGame=this.state.arrayGame;
        const index = arrayGame.findIndex(item=>item.id===selectItem.id);
        if(!arrayGame[index].status){
            const previousSelectIndex = arrayGame.findIndex(item=>item.status)
            arrayGame[index].status=true;
            arrayGame[previousSelectIndex].status=false;
        }
        this.setState({playerSelect :selectItem,arrayGame},()=>{})
    }

    onPressPlayButton =()=>{
        this.setState({disable:true})
        const random = setInterval(()=>{
            this.state.botSelect = this.state.arrayGame[Math.floor(Math.random() * 3)];
            this.setState({botSelect:this.state.botSelect})
        },100);
        setTimeout(()=>{
            clearInterval(random);
            let times,score;
            switch (this.state.playerSelect.id){
                case 'paper':
                    if(this.state.botSelect.id === 'paper'){
                        times = this.state.times - 1;
                        score = this.state.score;
                    } else if (this.state.botSelect.id === 'scissor'){
                        if(this.state.score >0){
                            score = this.state.score -1;
                        }
                        if(this.state.times >0){
                            times = this.state.times -1;
                        }
                        
                    }else {
                        score = this.state.score +1;
                        times = this.state.times +1;
                    }
                break;
                case 'scissor':
                    if(this.state.botSelect.id === 'scissor'){
                        times = this.state.times - 1;
                        score = this.state.score;
                    } else if (this.state.botSelect.id === 'Rock'){
                        if(this.state.score >0){
                            score = this.state.score -1;
                        }
                        if(this.state.times >0){
                            times = this.state.times -1;
                        }
                    }else {
                        score = this.state.score +1;
                        times = this.state.times +1;
                    }
                break;
                case 'rock':
                    if(this.state.botSelect.id === 'rock'){
                        times = this.state.times - 1;
                        score = this.state.score;
                    } else if (this.state.botSelect.id === 'paper'){
                        if(this.state.score >0){
                            score = this.state.score -1;
                        }
                        if(this.state.times >0){
                            times = this.state.times -1;
                        }
                    }else {
                        score = this.state.score +1;
                        times = this.state.times +1;
                    }
                break;
                
            }
            console.log(score)
            this.setState({disable:false,times,score}, ()=>{
                console.log(score)
            })
        },1000)
        
    }

    render() {
        return (
            <ImageBackground style={styles.backgroundContent} source={BackgroundImage}>
                <StatusBar barStyle="light-content" />
                <View style={styles.overLay}>
                    <View style={styles.playerContent}>
                        <PlayerItem imageGame={this.state.playerSelect.image} imagePlayer={Player} />
                        <PlayerItem imageGame={this.state.botSelect.image} imagePlayer={Bot} />
                    </View>
                    <View style={styles.selectContent}>
                        <SelectContent 
                            disable={this.state.disable}
                            arrayGame={this.state.arrayGame}
                            selectItem={this.onSelectItem}
                        />
                    </View>
                    <View style={styles.infoContent}>
                        <ResultContent 
                        disable={this.state.disable}
                        onPressPlayButton = {this.onPressPlayButton}
                        times={this.state.times}
                        score={this.state.score}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContent: {
        flex: 1,
    },
    overLay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    playerContent: {
        flex: 2,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,

    },
    infoContent: {
        flex: 1,
        alignItems: 'center'
    },
    textContent: {
        color: '#00fecd',
        fontSize: 25,
        fontWeight: 'bold'

    },
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imageGame: {
        height: 90,
        width: 90,

    },
    boxImage: {
        backgroundColor: '#000',
        width: 100,
        height: 100,
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 10,

    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderTopWidth: 12,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'yellow'
    },
    imageItem: {
        width: 50,
        height: 50
    },
    borderItem: {
        backgroundColor: '#000',
        width: 80,
        height: 80,
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonPlay: {
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff9aff',
        borderRadius: 8
    },
    buttonReset: {
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fecd34',
        borderRadius: 8
    }
})
