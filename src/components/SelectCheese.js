import React from 'react'

import '../css/Select.css'

// import cheese images for button backgrounds
import american from '../assets/cheeses/American.png'
import bluechz from '../assets/cheeses/BlueChz.png'
import cheddar from '../assets/cheeses/Cheddar.png'
import pepperjack from '../assets/cheeses/Pepperjack.png'
import provolone from '../assets/cheeses/Provolone.png'
import swiss from '../assets/cheeses/Swiss.png'

class SelectCheese extends React.Component {

    state = {
        msg: 'Select up to 3 cheeses:',
        chzTileVisibility: [
          'visible',
          'visible',
          'visible',
          'visible',
          'visible',
          'visible'
        ],
        chz: {
          strs: [], // check if chz.strs.length === 3
          imgs: [], // chz imgs -> adjust elsewhere
        },
    }

    chooseCheese = (c, s, i) => { // img, strs, visibility index
      // user can only select up to 3 chzs
      if (this.state.chz.strs.length === 3) return 
      const chzStrs = this.state.chz.strs
      const chzImgs = this.state.chz.imgs
      const newMsg = s + ' selected'
      const chzTileVisibility = this.state.chzTileVisibility
      chzStrs.push(s)
      chzImgs.push(c)
      chzTileVisibility[i] = 'hidden'
      this.setState({
        chz: {
          strs: chzStrs,
          imgs: chzImgs
        },
        chzTileVisibility: chzTileVisibility,
        msg: newMsg
      })
    }
    
    advanceToNextScreen = () => {
        let selectionsMade = this.state.chz.strs.length
        if (selectionsMade > 0) { // if chz selected, send to <Game/>
          const meatHT = [30, 35] // meat div hts for <Tile/> & <TileLanding/>
          meatHT[0] -= selectionsMade * 2
          meatHT[1] -= selectionsMade * 2
          const chzHTs = [0, 0, 0]
          while (selectionsMade > 0) {
            chzHTs[selectionsMade - 1] = 2
            selectionsMade -= 1
          }
          this.props.cheeseUpdate(this.state.chz.imgs, this.state.chz.strs, meatHT, chzHTs)
        } // otherwise, just advance to next screen
        setTimeout(() => {
          this.props.screenUpdate()
        }, 250);
      }

    render() {
        return (
            <div className='select select-cheese'>
                <div className='msg'>{this.state.msg}</div>
                <div 
                  className='done-button'
                  onClick={() => this.advanceToNextScreen()}
                >Done/None</div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(american, 'american', 0)}
                  style={{
                      backgroundImage: 'url(' + american + ')',
                      backgroundSize: '100% 100%',
                      visibility: this.state.chzTileVisibility[0]
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(cheddar, 'cheddar', 1)}
                  style={{
                      backgroundImage: 'url(' + cheddar + ')',
                      backgroundSize: '100% 100%',
                      visibility: this.state.chzTileVisibility[1]
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(pepperjack, 'pepperjack', 2)}
                  style={{
                      backgroundImage: 'url(' + pepperjack + ')',
                      backgroundSize: '100% 100%',
                      visibility: this.state.chzTileVisibility[2]
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(provolone, 'provolone', 3)}
                  style={{
                      backgroundImage: 'url(' + provolone + ')',
                      backgroundSize: '100% 100%',
                      visibility: this.state.chzTileVisibility[3]
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(swiss, 'swiss', 4)}
                  style={{
                      backgroundImage: 'url(' + swiss + ')',
                      backgroundSize: '100% 100%',
                      visibility: this.state.chzTileVisibility[4]
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(bluechz, 'bluechz', 5)}
                  style={{
                      backgroundImage: 'url(' + bluechz + ')',
                      backgroundSize: '100% 100%',
                      visibility: this.state.chzTileVisibility[5]
                  }}
                ></div>
            </div>
        )
    }
}

export default SelectCheese