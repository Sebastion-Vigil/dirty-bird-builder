import React from 'react'

import '../css/Select.css'

// import cheese images for button backgrounds
import american from '../assets/cheeses/American.png'
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
          'visible'
        ],
        chz: {
          strs: [], // check if chz.strs.length === 3
          imgs: [], // chz imgs -> adjust elsewhere
        }
    } // change elsewhere 2 handle chz arr instead of chz strs

    showState = () => {
      console.log("<SelectCheese/> state: ", this.state)
    }

    chooseCheese = (c, s, i) => { // img, strs, index
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
        setTimeout(() => {
          this.props.screenUpdate()
        }, 250);
      }
    // componentDidUpdate() === lots of infinite loopty loops
    componentDidUpdate() { // need to use another method
    
    }

    render() {
        return (
            <div className='select select-cheese' onClick={this.showState}>
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
            </div>
        )
    }
}

export default SelectCheese