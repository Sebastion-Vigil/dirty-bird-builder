import React from 'react'

import Logo from './Logo.js'
import GameScreen from './GameScreen.js'
import Answer from './Answer.js'

// import '../css/GameArea.css'

class GameArea extends React.Component {
    render() {
        return (
            <div className='game-area'>
                <Logo />
                <GameScreen
                  gameData={this.props.gameData} 
                />
                <Answer />
            </div>
        )
    }
}

export default GameArea