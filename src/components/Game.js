import React from 'react'

import GameArea from './GameArea.js'
import WelcomeScreen from './WelcomeScreen.js'

import '../css/Game.css'

class Game extends React.Component {
    state = {
        welcomeScreen: true
    }
    toggleWelcomeScreen = () => {
        let toggle = this.state.welcomeScreen
        toggle = toggle ? false : true
        this.setState({
            welcomeScreen: toggle
        })
    }
    render() {
        const screen = this.state.welcomeScreen ? <WelcomeScreen toggle={this.toggleWelcomeScreen}/> : <GameArea toggle={this.toggleWelcomeScreen} />
        return (
            <div className='game'>
                {screen}
            </div>
        )
    }
}

export default Game