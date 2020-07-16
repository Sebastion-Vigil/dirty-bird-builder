import React from 'react'

import '../css/GameMenu.css'

class GameMenu extends React.Component {
  // store all menu item variables here
  state = {
    cheeseburger: {
      answer: 'sesamerelishmayopicklesonionsbeefamericantomatolettuce',
      
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
          onClick={() => this.handleSelection(['cheeseburger!'])}
        >
          {' '}
          Cheeseburger
        </div>
        <div
          className='button'
          onClick={() => this.handleSelection(['Madlove Burger'])}
        >
          Madlove Burger
        </div>
      </div>
    )
  }
}

export default GameMenu
