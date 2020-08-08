import React from 'react'

import Logo from '../components/Logo.js'
import GameArea from '../components/GameArea.js'
import Answer from '../components/Answer.js'

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

export default GameScreen