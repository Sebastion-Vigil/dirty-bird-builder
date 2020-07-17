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
            backgroundImage: this.props.wholeTileImg,
            backgroundSize: '100% 100%'
          }}
        >
          <div 
            className='chz'
            style={{
              backgroundImage: this.props.chzImg,
              backgroundSize: '100% 100%'
            }}
          ></div>
          <div 
            className='meat'
            style={{
              backgroundImage: this.props.meatImg,
              backgroundSize: '100% 100%'
            }}
          ></div>
        </div>
      </Draggable>
    )
  }
}

export default Tile
