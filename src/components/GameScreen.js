import React from 'react'

import BunBottom from './BunBottom.js'
import BunTop from './BunTop.js'
import Tile from './Tile.js'
import TileLanding from './TileLanding.js'

// just a test to see if landingPadStyles arr would work

import '../css/GameScreen.css'

class GameScreen extends React.Component {
  state = this.props.gameData
  // componentWillMount() -> yeah this has got to go!
  componentWillMount () {
    // should this be componentDidMount() ?
    const landingColors = this.state.landingPadColors // <TileLanding/> colors pre <Tile/> drop
    const landingBackgrounds = this.state.landingPadBackgrounds // later -> store in <Game/> state
    let trueTiles = this.state.trueTiles
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
    this.setState({
      tileDown: [false, -1],
      meatDown: [false, -1, 'visible'],
      tilesDropped: 0,
      landingPadYs: yParams,
      topBunYpos: topBunY,
      landingPadColors: landingColors,
      landingPadBackgrounds: landingBackgrounds
    })
  }

  componentDidUpdate () {
    if (this.state.gameFinished) {
      const msg = this.checkWinOrLose() ? 'winner!' : 'loser!'
      console.log(msg)
    }
  }

  checkWinOrLose = () => {
    const answer = this.state.answer
    const firstHalf = this.state.userAnswer[0]
    const uAnswerSecond = this.state.userAnswer[1]
    return answer === firstHalf.join('') + uAnswerSecond.join('')
  }

  onStart = () => {}

  handleDrag = (e, ui) => {
    const TileID = ui.node.id
    const x = ui.x
    const y = ui.y
    const landingColors = this.state.landingPadColors
    const landingYs = this.state.landingPadYs
    const tileInsideLanding = [false, -1]
    const meatInsideLanding = [false, -1, this.state.meatDown[2]]
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
    const userMeatCheese = this.state.userMeatCheese
    let TileID = ui.node.id
    const droppedTile = !isNaN(TileID) ? parseInt(TileID) : TileID
    const tiles = this.state.tiles
    const isTileDown = this.state.tileDown
    const isMeatDown = this.state.meatDown
    const landingBackgrounds = this.state.landingPadBackgrounds
    const userAnswer = this.state.userAnswer
    let tilesDropped = this.state.tilesDropped
    if (isTileDown[0]) {
      if (landingBackgrounds[isTileDown[1]][3]) return // exit if <Tile/> already in <TileLanding/>
      landingBackgrounds[isTileDown[1]][0] = tiles[TileID][0]
      landingBackgrounds[isTileDown[1]][3] = true
      tiles[droppedTile][1] = 'hidden'
      userAnswer[1][isTileDown[1]] = tiles[TileID][2]
      tilesDropped += 1
    }
    if (isMeatDown[0]) {
      if (landingBackgrounds[isMeatDown[1]][3]) return // exit if <Tile/> already in <TileLanding/>
      const chz = this.state.cheese
      const meat = this.state.meat
      landingBackgrounds[isMeatDown[1]][1] = chz
      landingBackgrounds[isMeatDown[1]][2] = meat
      landingBackgrounds[isMeatDown[1]][3] = true
      isMeatDown[2] = 'hidden'
      userAnswer[1][isMeatDown[1]] = userMeatCheese
      tilesDropped += 1
    }
    console.log(tilesDropped === this.state.trueTiles)
    this.setState({
      landingPadBackgrounds: landingBackgrounds,
      tiles: tiles,
      meatDown: isMeatDown,
      tileDown: isTileDown,
      userAnswer: userAnswer,
      tilesDropped: tilesDropped,
      gameFinished: tilesDropped === this.state.trueTiles
    })
  }

  showState = () => {
    console.log(this.state.cheese)
    console.log(this.state)
  }

  render () {
    return (
      <div className='game-screen' onClick={this.showState}>
        <BunTop
          top={this.state.topBunYpos}
          left={5}
          bunTop={this.state.topBun}
          bunTopSauce={this.state.topBunSauce}
        />
        <BunBottom
          top={`286px`}
          left={`5px`}
          bunBottom={this.state.bottomBun}
          bunBottomSauce={this.state.bottomBunSauce}
        />
        {this.state.landingPadYs.map((l, i) => {
          return (
            <TileLanding
              key={i}
              x={27}
              y={l}
              id={i.toString()}
              color={this.state.landingPadColors[i]}
              droppedImg={this.state.landingPadBackgrounds[i][parseInt(0)]}
              landingChz={this.state.landingPadBackgrounds[i][parseInt(1)]}
              landingMeat={this.state.landingPadBackgrounds[i][parseInt(2)]}
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
          chzImg={this.state.cheese}
          meatImg={this.state.meat}
          id={`meat`} // manually for now -> like all else, refactor later
          visibility={this.state.meatDown[2]}
        />
        {this.state.tiles.map((t, i) => {
          return (
            <Tile
              key={i}
              id={i.toString()}
              wholeTileImg={t[0]}
              onStart={this.onStart}
              onStop={this.onStop}
              onDrag={this.handleDrag}
              x={210}
              y={this.state.tileYs[i]}
              visibility={this.state.tiles[i][1]}
            />
          )
        })}
      </div>
    )
  }
}

export default GameScreen
