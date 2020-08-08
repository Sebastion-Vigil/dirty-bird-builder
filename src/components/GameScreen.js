import React from 'react'

import Logo from './Logo.js'
import GameArea from './GameArea.js'
import Answer from './Answer.js'

// import '../css/GameArea.css'
// turn into GameScreen
class GameScreen extends React.Component {
    render() {
        return (
            <div className='game-screen'>
                <Logo />
                <GameArea
                  gameData={this.props.gameData} 
                />
                <Answer />
            </div>
        )
    }
}
// between Logo & Answer: turn GameScreen into GameArea
export default GameScreen