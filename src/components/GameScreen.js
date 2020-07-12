import React from 'react'

import Tile from './Tile.js'
import TileLanding from './TileLanding.js'

import '../css/GameScreen.css'

class GameScreen extends React.Component {
  state = {

  }
  handleDrag = (e, ui) => {

  }
  onStart = () => {

  }
  onStop = () => {

  }
  render () {
    return (
      <div className='game-screen'>
        <Tile
          x={210}
          y={5}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={210}
          y={40}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={210}
          y={75}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={210}
          y={110}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
         <Tile
          x={210}
          y={145}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={210}
          y={180}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={210}
          y={215}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={210}
          y={250}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <Tile
          x={210}
          y={285}
          onStart={this.onStart}
          onDrag={this.handleDrag}
          onStop={this.onStop}
        />
        <TileLanding
          x={5}
          y={5}
        />
      </div>
    )
  }
}

export default GameScreen
