import React from 'react'

import '../css/WelcomeScreen.css'

class WelcomeScreen extends React.Component {
    render() {
        return(
            <div className='welcome-screen'>
                Welcome to the Dirty Bird!
                <div onClick={this.props.toggle} className='button'>Enter Game</div>
                <div className='button'>Cheeseburger</div>
                <div className='button'>BCB</div>
            </div>
        )
    }
}

export default WelcomeScreen