import React from 'react'

// in sequential order
import GameMenu from './GameMenu.js'
import SelectBun from './SelectBun.js'
import SelectSauce from './SelectSauce.js'
import SelectMeat from './SelectMeat.js'
import SelectCheese from './SelectCheese.js'
import GameArea from './GameArea.js'

import '../css/Game.css'
// time to refactor -> where are the userAnswer strings being passed
class Game extends React.Component {
  state = { // currentScreen should stay here
    currentScreen: 0, // iterate through game sequence
    tiles: [], // background img addresses
    tileInnerHTs: {
      chz: {
        chz1: 'none', // was overthinking
        chz2: 'none', // in <Tile/> & <TileLanding/>
        chz3: 'none' // only meat div(s) height 
      }, // need to be dynamic
      meat: 'none'
    },
    tileLandingInnerHTs: {
      chz: {
        chz1: 'none',
        chz2: 'none',
        chz3: 'none'
      },
      meat: 'none'
    },
    trueTiles: 0, // determine how many landing pads
    tileYs: [], // y params of <Tiles /> passed down as props
    landingPadYs: [], // y addresses of landing pads
    landingPadColors: [],
    landingPadBackgrounds: [],
    question: '', // probably gonna just pass this to <Logo/>
    answer: [],
    topBun: '', // imgAddress
    bottomBun: '', // imgAddress
    topBunSauce: '', // imgAddress
    bottomBunSauce: '', // imgAddress
    meat: '', // imgAddress
    cheese: ['none', 'none', 'none'], // imgAddress -> turn into [arr]
    gameFinished: false,
    // 'meatcheese' str -> insert in userAnswer when meat tile dropped
    userMeatCheese: ''
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
      landingPadYs: itemData.landingYs,
      tileYs: itemData.tileYs,
      userAnswer: [
        [new Array(itemData.answer[0].length)],
        [new Array(itemData.answer[1].length)]
      ]
    })
  }

  selectBun = (bunArr, str) => {
    const userAnswer = this.state.userAnswer
    userAnswer[0][0] = str
    this.setState({
      currentScreen: 2, // on to Step 3!
      topBun: bunArr[0],
      bottomBun: bunArr[1],
      userAnswer: userAnswer
    })
  }

  selectSauce = (sauce, str) => {
    let topS = this.state.topBunSauce
    let bottomS = this.state.bottomBunSauce
    const userAnswer = this.state.userAnswer
    if (!bottomS) {
      bottomS = sauce
      userAnswer[0][1] = str
    } else {
      topS = sauce
      userAnswer[0][2] = str
    }
    this.setState({
      topBunSauce: topS,
      bottomBunSauce: bottomS,
      userAnswer: userAnswer
    })
  }
  // m = img address, str = string
  selectMeat = (m, str) => {
    this.setState({
      meat: m,
      userMeatCheese: str
    })
  }
  // ([chzImg...], [chzStr...])
  selectCheese = (chz, s) => {
    let userMeatCheese = this.state.userMeatCheese
    s.forEach((chzStr) => {
      userMeatCheese += chzStr
    })
    const chzArr = this.state.cheese
    chz.forEach((c, i) => {
      chzArr[i] = c
    })
    this.setState({
      cheese: chzArr,
      userMeatCheese: userMeatCheese
    })
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
