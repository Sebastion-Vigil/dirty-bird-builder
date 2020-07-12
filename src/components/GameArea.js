import React from 'react'

import Logo from './Logo.js'
import GameScreen from './GameScreen.js'
import AnswerScreen from './AnswerScreen.js'

import '../css/GameArea.css'

class GameArea extends React.Component {
    render() {
        return (
            <div className='game-area'>
                <Logo toggle={this.props.toggle} />
                <GameScreen />
                <AnswerScreen />
            </div>
        )
    }
}

export default GameArea