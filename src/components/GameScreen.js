import React from 'react'

import BunBottom from './BunBottom.js'
import BunTop from './BunTop.js'
import Tile from './Tile.js'
import TileLanding from './TileLanding.js'

// just a test to see if landingPadStyles arr would work

import '../css/GameScreen.css'

class GameScreen extends React.Component {
  state = {
    gameData: {},
    tileDown: [false, -1], // [boolean, index of <TileLanding/> containing <Tile/>]
  }
  componentWillMount () {
    const landingColors = [] // background, either img or color
    const landingBackgrounds = []
    let trueTiles = this.props.gameData.trueTiles
    let ySeed = 248
    const yParams = []
    while (trueTiles > 0) { // y params for landings
      yParams.push(ySeed)
      landingColors.push('whitesmoke')
      landingBackgrounds.push('none')
      ySeed -= 38
      trueTiles -= 1
    }
    // TopBun now starts just above highest TileLanding
    const topBunY = yParams[yParams.length - 1] - 55
    this.props.gameData.landingPadYs = yParams
    this.props.gameData.topBunYpos = topBunY
    this.props.gameData.landingPadColors = landingColors
    this.props.gameData.landingPadBackgrounds = landingBackgrounds
    this.setState({
      gameData: this.props.gameData
    })
  }

  onStart = () => {}

  handleDrag = (e, ui) => {
    const x = ui.x
    const y = ui.y
    const landingColors = this.state.gameData.landingPadColors
    const landingYs = this.state.gameData.landingPadYs
    const tileInsideLanding = [false, -1]
    if (x >= 27 && x <= 32) {
      for (let i = 0; i < landingYs.length; i++) {
        if (y >= landingYs[i] && y <= (landingYs[i] + 5)) {
          landingColors[i] = 'magenta'
          tileInsideLanding[0] = true
          tileInsideLanding[1] = i
        } else {
          landingColors[i] = 'whitesmoke'
          tileInsideLanding[0] = false
          tileInsideLanding[1] = -1
        }
      }
      this.setState({
        landingPadColors: landingColors,
        tileDown: tileInsideLanding
      })
    }
  }
  onStop = (e, ui) => {
    const droppedImgIndex = parseInt(ui.node.id)
    console.log(droppedImgIndex)
    const tiles = this.state.gameData.tiles
    const isTileDown = this.state.tileDown
    const landingBackgrounds = this.state.gameData.landingPadBackgrounds
    if (isTileDown[0]) {
      landingBackgrounds[isTileDown[1]] = tiles[droppedImgIndex][0]
      tiles[droppedImgIndex][1] = 'hidden'
      this.setState({
        landingPadBackgrounds: landingBackgrounds,
        tiles: tiles
      })
    }
  }
  showState = () => {
    console.log(this.state)
  }
  render () {
    return (
      <div className='game-screen' onClick={this.showState}>
        <BunTop
          top={this.state.gameData.topBunYpos}
          left={5}
          bunTop={this.state.gameData.topBun}
          bunTopSauce={this.state.gameData.topBunSauce}
        />
        <BunBottom
          top={`286px`}
          left={`5px`}
          bunBottom={this.state.gameData.bottomBun}
          bunBottomSauce={this.state.gameData.bottomBunSauce}
        />
        {
          this.state.gameData.landingPadYs.map((l, i) => {
            return (
              <TileLanding
                key={i}
                x={27}
                y={l}
                id={i.toString()}
                color={this.state.gameData.landingPadColors[i]}
                droppedImg={this.state.gameData.landingPadBackgrounds[i]}
              />
            )
          })
        }
        <Tile
          onStart={this.onStart}
          onStop={this.onStop}
          onDrag={this.handleDrag}
          x={210}
          y={285}
          chzImg={this.state.gameData.cheese}
          meatImg={this.state.gameData.meat[0]}
        />
        {this.state.gameData.tiles.map((t, i) => {
          const yMinMax = [5, 40, 75, 110, 145, 180, 215, 250]
          return (
            <Tile
              key={i}
              id={i.toString()}
              wholeTileImg={t[0]}
              onStart={this.onStart}
              onStop={this.onStop}
              onDrag={this.handleDrag}
              x={210}
              y={yMinMax[i]}
              visibility={this.state.gameData.tiles[i][1]}
            />
          )
        })}
      </div>
    )
  }
}

export default GameScreen