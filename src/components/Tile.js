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
            backgroundImage: 'url(' + this.props.wholeTileImg + ')',
            backgroundSize: '100% 100%',
            visibility: this.props.visibility
          }}
          id={this.props.id}
        >
          <div 
            className='chz'
            style={{
              backgroundImage: 'url(' + this.props.chzImg3 + ')',
              backgroundSize: '100% 100%',
              height: this.props.chzTile3HT
            }}
          ></div>
          <div 
            className='chz'
            style={{
              backgroundImage: 'url(' + this.props.chzImg2 + ')',
              backgroundSize: '100% 100%',
              height: this.props.chzTile2HT
            }}
          ></div>
          <div 
            className='chz'
            style={{
              backgroundImage: 'url(' + this.props.chzImg1 + ')',
              backgroundSize: '100% 100%',
              height: this.props.chzTile1HT
            }}
          ></div>
          <div 
            className='meat'
            style={{
              backgroundImage: 'url(' + this.props.meatImg + ')',
              backgroundSize: '100% 100%',
              height: this.props.tileMeatHT
            }}
          ></div>
        </div>
      </Draggable>
    )
  }
}

export default Tile
