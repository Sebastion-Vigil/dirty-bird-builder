import React from 'react'

import '../css/GameMenu.css'

// import Tile background imgs
import pickles from '../assets/sandwich-toppings/Pickles.png'
import onions from '../assets/sandwich-toppings/Onions.png'
import tomatos from '../assets/sandwich-toppings/Tomatos.png'
import iceburg from '../assets/sandwich-toppings/Iceburg.png'
import avocado from '../assets/sandwich-toppings/Avocado.png'
import candiedbacon from '../assets/sandwich-toppings/CandiedBacon.png'
import cheesecrisp from '../assets/sandwich-toppings/CheeseCrisp.png'
import romaine from '../assets/sandwich-toppings/Romaine.png'

class GameMenu extends React.Component {
  // store all menu item variables here
  state = {
    cheeseburger: { 
      question: 'What comes on a Cheeseburger?',
      answer: 'americansesamerelishmayopicklesonionsbeeftomatoiceburg',
      correctTiles: 5,
      nextScreen: 1,
      tiles: [
        [pickles, 'visible'],
        [onions, 'visible'],
        [tomatos, 'visible'],
        [iceburg, 'visible'],
        [avocado, 'visible'],
        [candiedbacon, 'visible'],
        [cheesecrisp, 'visible'],
        [romaine, 'visible']
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
