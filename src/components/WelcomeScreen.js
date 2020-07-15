import React from 'react'

import '../css/WelcomeScreen.css'

class WelcomeScreen extends React.Component {
    render() {
        return(
            <div className='welcome-screen'>
                Welcome to the Dirty Bird!
                <div className='button' onClick={this.props.select} >Cheeseburger</div>
                <div className='button'>Madlove Burger</div>
            </div>
        )
    }
}

export default WelcomeScreen