import React from 'react'

import '../css/GameMenu.css'

class GameMenu extends React.Component {
  // store all menu item variables here
  state = {
    cheeseburger: { // answer format: 'cheesebuningredients...meat...ingredients'
      question: 'What comes on a Cheeseburger?',
      answer: 'americansesamerelishmayopicklesonionsbeeftomatolettuce',
      tiles: [ // meat/chz tile sent to <Game/> later after selecting chz
        '../assets/sandwich-toppings/Pickles.png',
        '../assets/sandwich-toppings/Onions.png',
        '../assets/sandwich-toppings/Tomatos.png',
        '../assets/sandwich-toppings/Iceburg.png',
        '../assets/sandwich-toppings/Avocado.png' // random incorrect ingredient
      ],
      correctTiles: 5,
      yParams: [], // will come back to this one
      nextScreen: 0
    }
  }

  handleSelection = itemData => {
    this.props.select(itemData)
  }

  render () {
    return (
      <div className='game-menu'>
        Welcome to the Dirty Bird!
        <div
          className='button'
          onClick={() => this.handleSelection(this.state.cheeseburger)}
        >
          {' '}
          Cheeseburger
        </div>
        <div
          className='button'
          
        >
          Madlove Burger
        </div>
      </div>
    )
  }
}

export default GameMenu
