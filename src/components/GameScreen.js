import React from 'react'

import BunBottom from './BunBottom.js'
import BunTop from './BunTop.js'
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
        <BunTop
          top={`5px`}
          left={`5px`}
        />
        <BunBottom
          top={`284px`}
          left={`5px`} 
        />
      </div>
    )
  }
}

export default GameScreen


{/* <Tile
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
        /> */}
