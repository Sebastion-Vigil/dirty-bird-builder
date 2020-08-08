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
class Game extends React.Component { // turn into GameArea
  state = { // currentScreen should stay here
    currentScreen: 0, // iterate through game sequence
    tiles: [], // <Tile/> background imgs
    tileYs: [], // y addresses for <Tile/>s
    trueTiles: 0, // determine how many landing pads
    tileMeatHT: 30, // ht of meat div in <Tile/>
    tileLandingMeatHT: 35, // ht of meat div in <TileLanding/>
    chzHTs: [0, 0, 0], // chz div ht for <Tile/> & <TileLanding/>
    landingPadYs: [], // y addresses for <TileLanding/>s 
    landingPadColors: [], // <TileLanding/> background colors
    landingPadBackgrounds: [], // <TileLanding/> background imgs
    tileDown: [false, -1], // [boolean, i of landing w/tile]
    meatDown: [false, -1, 'visible'], // [boolean, i of landing w/meat tile]
    tilesDropped: 0,
    question: '', // probably gonna just pass this to <Logo/>
    answer: [],
    topBun: '', // imgAddress
    bottomBun: '', // imgAddress
    topBunSauce: '', // imgAddress
    bottomBunSauce: '', // imgAddress
    meat: '', // background img for meat <Tile/>
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
      landingPadYs: itemData.landingYs,
      tileYs: itemData.tileYs,
      question: itemData.question,
      answer: itemData.answer,
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
  // ([chzImg...], [chzStr...], [tileMeatHT, tileLandingMeatHT], [cheeseHTs...])
  selectCheese = (chz, s, meatHTs, cHTs) => {
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
      userMeatCheese: userMeatCheese,
      tileMeatHT: meatHTs[0],
      tileLandingMeatHT: meatHTs[1],
      chzHTs: cHTs
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
