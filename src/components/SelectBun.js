import React from 'react'

import '../css/Select.css'

class SelectBun extends React.Component {
    state = {

    }
    render() {
        return (
            <div onClick={this.props.click} className='select-bun'></div>
        )
    }
}

export default SelectBun.js