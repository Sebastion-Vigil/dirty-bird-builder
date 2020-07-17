import React from 'react'

import BunBottom from './BunBottom.js'
import BunTop from './BunTop.js'
import Tile from './Tile.js'
import TileLanding from './TileLanding.js'

import '../css/GameScreen.css'

class GameScreen extends React.Component {
  state = {
    gameData: {

    }
  }
  componentWillMount() {
    this.setState({
      gameData: this.props.gameData
    })
  }
  handleDrag = (e, ui) => {}
  onStart = () => {}
  onStop = () => {}
  showState = () => {
    console.log(this.state.gameData)
  }
  render () {
    return (
      <div className='game-screen' onClick={this.showState}>
        <BunTop 
          top={`5px`} 
          left={`5px`}
          bunTop={this.state.gameData.topBun}
          bunTopSauce={this.state.gameData.topBunSauce}
        />
        <BunBottom 
          top={`284px`} 
          left={`5px`}
          bunBottom={this.state.gameData.bottomBun}
          bunBottomSauce={this.state.gameData.bottomBunSauce}
        />
        {this.state.gameData.tiles.map((t, i) => {
          const yMinMax = [5, 40, 75, 110, 145]
          return (
            <Tile
              key={i}
              wholeTileImg={t}
              onStart={this.onStart}
              onStop={this.onStop}
              onDrag={this.handleDrag}
              y={yMinMax[i]}
              x={210}
            />
          )
        })}
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