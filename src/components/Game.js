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
    tiles: [],
    trueTiles: 0, // dynamic landing pad generation
    landingPads: [],
    question: '', // probably gonna just pass this to <Logo/>
    answer: '',
    userAnswer: '',
    topBun: '',
    bottomBun: '',
    topBunSauce: '',
    bottomBunSauce: '',
    yMinMax: [],   
  }

  selectMenuItem = (itemData) => {
    this.setState({
      currentScreen: itemData.nextScreen,
      tiles: itemData.tiles,
      trueTiles: itemData.correctTiles,
      question: itemData.question,
      answer: itemData.answer,
      yMinMax: itemData.yParams
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


  // temporary method for debugging purposes
  showState = () => {
    console.log(this.state)
  }

  render () {
    const screens = [
      <GameMenu select={this.selectMenuItem} />,
      <SelectBun bun={this.selectBun} />,
      <SelectSauce
        tBun={this.state.topBun}
        bBun={this.state.bottomBun}  
      />,
      <SelectMeat />,
      <SelectCheese />,
      <GameArea />
    ]
    const screen = screens[this.state.currentScreen]
    return <div className='game' onClick={this.showState} >{screen}</div>
  }
}

export default Game
