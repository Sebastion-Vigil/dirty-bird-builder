import React from 'react'
import Draggable from 'react-draggable'

import '../css/Tile.css'

class Tile extends React.Component {
  render () {
    return (
      <Draggable
        defaultPosition={{
          x: this.props.x,
          y: this.props.y
        }}
        bounds='parent'
        onStart={this.props.onStart}
        onDrag={this.props.onDrag}
        onStop={this.props.onStop}
      >
        <div 
          className='tile'
          style={{
              backgroundImage: this.props.img,
              backgroundSize: '100% 100%'
          }}
        >{this.props.txt}
        </div>
      </Draggable>
    )
  }
}

export default Tile
