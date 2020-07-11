import React from 'react'
import Draggable from 'react-draggable'

import '../css/Tile.css'

class Tile extends React.Component {
    render() {
        return (
            <Draggable
            >
              <div className='tile'></div>
            </Draggable>
        )
    }
}

export default Tile