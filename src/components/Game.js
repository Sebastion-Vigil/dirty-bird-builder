import React from 'react'

// in sequential order
import GameMenu from './GameMenu.js'
import SelectBun from './SelectBun.js'
import SelectSauce from './SelectSauce.js'
import SelectMeat from './SelectMeat.js'
import SelectCheese from './SelectCheese.js'
import GameArea from './GameArea.js'

import '../css/Game.css'

class Game extends React.Component {
  state = {
    currentScreen: 0, // iterate through game sequence
    tiles: [], // background img addresses
    trueTiles: 0, // dynamic landing pad generation
    question: '', // probably gonna just pass this to <Logo/>
    answer: '',
    userAnswer: '',
    topBun: '', // imgAddress
    bottomBun: '', // imgAddress
    topBunSauce: '', // imgAddress
    bottomBunSauce: '', // imgAddress
    meat: [], // [imgAddress, str]
    cheese: '', // imgAddress
    tileYMinMax: [], // dynamically generate tile addresses
    landingYMinMax: [], // dynamically generate landing pad addresses
  }
  // need to use this consistently everywhere
  updateCurrentScreen = () => {
    let screen = this.state.currentScreen
    if (screen <= 4) {
      screen += 1
    }
    this.setState({
      currentScreen: screen
    })
  }

  selectMenuItem = (itemData) => {
    this.setState({
      currentScreen: itemData.nextScreen,
      tiles: itemData.tiles,
      trueTiles: itemData.correctTiles,
      question: itemData.question,
      answer: itemData.answer,
      landingYMinMax: itemData.landingYMinMaxParams,
    })
  }

  selectBun = (bunArr, wholeBun) => {
    this.setState({
      currentScreen: 2, // on to Step 3!
      topBun: bunArr[0],
      bottomBun: bunArr[1],
      userAnswer: wholeBun
    })
  }

  selectSauce = (sauce, str) => {
    let topS = this.state.topBunSauce
    let bottomS = this.state.bottomBunSauce
    if (!bottomS) {
      bottomS = sauce
    } else {
      topS = sauce
    }
    let uAnswer = this.state.userAnswer
    uAnswer += str
    this.setState({
      userAnswer: uAnswer,
      topBunSauce: topS,
      bottomBunSauce: bottomS
    })
  }
  // m = img address, s = string
  selectMeat = (m, s) => {
    const updatedMeat = this.state.meat
    updatedMeat[0] = m
    updatedMeat[1] = s
    this.setState({
      meat: updatedMeat
    })
  }

  selectCheese = (chz, s) => {
    let uAnswer = this.state.userAnswer
    const newUserAnswer = s + uAnswer
    this.setState({
      userAnswer: newUserAnswer,
      cheese: chz 
    })
  }

  // temporary method for debugging purposes
  showState = () => {
    console.log(this.state)
  }

  render () {
    const screens = [
      <GameMenu select={this.selectMenuItem} />,
      <SelectBun bun={this.selectBun} />,
      <SelectSauce
        sauceUpdate={this.selectSauce}
        screenUpdate={this.updateCurrentScreen}
        tBun={this.state.topBun}
        bBun={this.state.bottomBun}  
      />,
      <SelectMeat
        meatUpdate={this.selectMeat}
        screenUpdate={this.updateCurrentScreen}
      />,
      <SelectCheese
        cheeseUpdate={this.selectCheese}
        screenUpdate={this.updateCurrentScreen} 
      />,
      <GameArea
        gameData={this.state} 
      />
    ]
    const screen = screens[this.state.currentScreen]
    return <div className='game'>{screen}</div>
  }
}

export default Game
