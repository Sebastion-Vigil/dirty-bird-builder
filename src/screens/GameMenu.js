import React from 'react'

// import '../css/GameMenu.css'
// wow this actually worked! fucking cool!
import menu from '../components/menu-items.js'


class GameMenu extends React.Component {

  handleSelection = itemData => {
    this.props.select(itemData)
  }

  render () {
    return (
      <div className='game-menu'>
        Welcome to the Dirty Bird!
        <div
          className='button'
          onClick={() => this.handleSelection(menu.cheeseburger)}
        >
          Cheeseburger
        </div>
        <div 
          className='button'
          onClick={() => this.handleSelection(menu.madlove)}
        >
          Madlove Burger
        </div>
      </div>
    )
  }
}

export default GameMenu
