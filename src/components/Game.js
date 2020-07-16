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
    answer: '', // 'bunsaucesaucemeatcheeseingredients..'
    yMinMax: [],   
  }

  selectMenuItem = (itemData) => {
    console.log(itemData)
  }

  render () {
    const screens = [
      <GameMenu select={this.selectMenuItem} />,
      <SelectBun />,
      <SelectSauce />,
      <SelectMeat />,
      <SelectCheese />,
      <GameArea />
    ]
    const screen = screens[this.state.currentScreen]
    return <div className='game'>{screen}</div>
  }
}

export default Game
