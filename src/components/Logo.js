import React from 'react'

import '../css/Logo.css'

class Logo extends React.Component {
    render() {
        return (
            <div onClick={this.props.toggle} className='logo'></div>
        )
    }
}

export default Logo