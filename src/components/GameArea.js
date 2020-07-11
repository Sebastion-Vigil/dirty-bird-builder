import React from 'react'

import Logo from './Logo.js'
import GameScreen from './GameScreen.js'
import AnswerScreen from './AnswerScreen.js'

import '../css/GameArea.css'

// here is where I should handle => 
// user greeted with welcome message and root menu
// upon clicking menu item, user sent to <GameArea/>
// => make button that quits game and returns to root menu
// each menu item button passes unique props to the game screen:
    // question
    // number of droppads
    // number of tile ingredients
    // path to corresponding tile images
class GameArea extends React.Component {
    render() {
        return (
            <div className='game-area'>
                <Logo />
                <GameScreen />
                <AnswerScreen />
            </div>
        )
    }
}

export default GameArea