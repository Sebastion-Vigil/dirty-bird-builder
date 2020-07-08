import React from 'react'

import GameArea from './GameArea.js'

import '../css/Game.css'

class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <GameArea />
            </div>
        )
    }
}

export default Game