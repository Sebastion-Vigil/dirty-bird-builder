import React from 'react'

import '../css/GameMenu.css'

// import Tile background imgs
import pickles from '../assets/sandwich-toppings/Pickles.png'
import onions from '../assets/sandwich-toppings/Onions.png'
import tomatos from '../assets/sandwich-toppings/Tomatos.png'
import iceburg from '../assets/sandwich-toppings/Iceburg.png'
import avocado from '../assets/sandwich-toppings/Avocado.png'

class GameMenu extends React.Component {
  // store all menu item variables here
  state = {
    cheeseburger: { 
      question: 'What comes on a Cheeseburger?',
      answer: 'americansesamerelishmayopicklesonionsbeeftomatoiceburg',
      correctTiles: 5,
      tileYMinMaxParams: [],
      landingYMinMaxParams: [], // will come back to this one
      nextScreen: 1,
      tiles: [
        pickles,
        onions,
        tomatos,
        iceburg,
        avocado // random incorrect ingredient
      ]
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
