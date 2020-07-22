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
    tileDown: [false, -1], // [boolean, index of <TileLanding/> w/ <Tile/>]
    meatDown: [false, -1, 'visible', ''], // [boolean, index of <TileLanding/> w/ meat <Tile />]
  } // also meat <Tile/> visibility & meat str for userAnswer

  componentWillMount () { // should this be componentDidMount() ?
    const landingColors = [] // <TileLanding/> colors pre <Tile/> drop
    const landingBackgrounds = [] // later -> store in <Game/> state
    const TileMeatName = this.props.gameData.meat[1] // a str -> userAnswer
    const meatDwn = this.state.meatDown
    meatDwn[3] = TileMeatName
    let trueTiles = this.props.gameData.trueTiles
    let ySeed = 248
    const yParams = []
    while (trueTiles > 0) {
      // y params for landings
      yParams.push(ySeed)
      landingColors.push('whitesmoke')
      // <TileLanding/> [droppedImg, landingChz, landingMeat, boolean(TileLanding already full?)]
      landingBackgrounds.push(['none', 'none', 'none', false])
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
      gameData: this.props.gameData,
      meatDown: meatDwn
    })
  }

  onStart = () => {}

  handleDrag = (e, ui) => {
    const TileID = ui.node.id
    const x = ui.x
    const y = ui.y
    const landingColors = this.state.gameData.landingPadColors
    const landingYs = this.state.gameData.landingPadYs
    const tileInsideLanding = [false, -1]
    const meatInsideLanding = [
      false,
      -1,
      this.state.meatDown[2],
      this.state.meatDown[3]
    ]
    if (x >= 27 && x <= 32) {
      for (let i = 0; i < landingYs.length; i++) {
        if (TileID === 'meat' && y >= landingYs[i] && y <= landingYs[i] + 5) {
          landingColors[i] = 'magenta' 
          meatInsideLanding[0] = true
          meatInsideLanding[1] = i
        } else if (
          TileID !== 'meat' &&
          y >= landingYs[i] &&
          y <= landingYs[i] + 5
        ) {
          landingColors[i] = 'magenta'
          tileInsideLanding[0] = true
          tileInsideLanding[1] = i
        } else {
          landingColors[i] = 'whitesmoke'
        }
      }
      this.setState({
        landingPadColors: landingColors,
        tileDown: tileInsideLanding,
        meatDown: meatInsideLanding
      })
    }
  }
  onStop = (e, ui) => {
    const uAnswer = this.state.gameData.userAnswer
    let TileID = ui.node.id // well duh it's because I'm using TileID instead of TileLandingID
    const droppedTile = !isNaN(TileID) ? parseInt(TileID) : TileID
    const tiles = this.state.gameData.tiles
    const isTileDown = this.state.tileDown
    const isMeatDown = this.state.meatDown
    const landingBackgrounds = this.state.gameData.landingPadBackgrounds
    
    if (isTileDown[0]) {
      if (landingBackgrounds[isTileDown[1]][3]) return
      landingBackgrounds[isTileDown[1]][0] = tiles[TileID][0]
      landingBackgrounds[isTileDown[1]][3] = true
      tiles[droppedTile][1] = 'hidden'
      uAnswer.push(tiles[droppedTile][2])
    }
    if (isMeatDown[0]) {
      if (landingBackgrounds[isMeatDown[1]][3]) return
      const chz = this.state.gameData.cheese // as above, so below -> refactor
      const meat = this.state.gameData.meat[0] // no need for useless str in arr
      landingBackgrounds[isMeatDown[1]][1] = chz
      landingBackgrounds[isMeatDown[1]][2] = meat
      landingBackgrounds[isMeatDown[1]][3] = true
      isMeatDown[2] = 'hidden'
      uAnswer.push(isMeatDown[3])
    }
    this.setState({
      landingPadBackgrounds: landingBackgrounds,
      tiles: tiles,
      meatDown: isMeatDown,
      tileDown: isTileDown
    })
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
        {this.state.gameData.landingPadYs.map((l, i) => {
          return (
            <TileLanding
              key={i}
              x={27}
              y={l}
              id={i.toString()}
              color={this.state.gameData.landingPadColors[i]}
              droppedImg={this.state.gameData.landingPadBackgrounds[i][parseInt(0)]}
              landingChz={this.state.gameData.landingPadBackgrounds[i][parseInt(1)]}
              landingMeat={this.state.gameData.landingPadBackgrounds[i][parseInt(2)]}
            />
          )
        })}
        <Tile
          // beef w/chz 2 elmnts w/imgs,
          // refactor <TileLanding/> 2 b same
          onStart={this.onStart}
          onStop={this.onStop}
          onDrag={this.handleDrag}
          x={210}
          y={285}
          chzImg={this.state.gameData.cheese}
          meatImg={this.state.gameData.meat[0]}
          id={`meat`} // manually for now -> like all else, refactor later
          visibility={this.state.meatDown[2]}
        />
        {this.state.gameData.tiles.map((t, i) => {
          return (
            <Tile
              key={i}
              id={i.toString()}
              wholeTileImg={t[0]}
              onStart={this.onStart}
              onStop={this.onStop}
              onDrag={this.handleDrag}
              x={210}
              y={this.state.gameData.tileYs[i]}
              visibility={this.state.gameData.tiles[i][1]}
            />
          )
        })}
      </div>
    )
  }
}

export default GameScreen
