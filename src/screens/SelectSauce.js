import React from 'react'

// import top and bottom bun components
import BunTop from '../components/BunTop.js'
import BunBottom from '../components/BunBottom.js'

import '../css/Select.css'

// import sauce images for button backgrounds
import chipMayo from '../assets/sauces/ChipotleMayo.png'
// import garlicAioli from '../assets/sauces/GarlicAioli.png'
import mayo from '../assets/sauces/Mayo.png'
import relish from '../assets/sauces/Relish.png'
import trickedRelish from '../assets/sauces/TrickedRelish.png'
import None from '../assets/sauces/None.png'

class SelectSauce extends React.Component {

    state = {
        bunSauce: ['', ''], // [bottom, top]
        msg: 'Sauce for bottom bun, if any',
    }

    chooseSauce = (sauce, str) => {
      const s = this.state.bunSauce
      if (s[0] && s[1]) return
      let i
      let Msg
      if (!s[0] && !s[1]) {
        i = 0
        Msg = 'Sauce for top bun, if any'
      }
      if (s[0] && !s[1]) {
        i = 1
        Msg = 'Now to select meat'
      }
      s[i] = sauce
      this.props.sauceUpdate(sauce, str)
      this.setState({
        bunSauce: s,
        msg: Msg
      })
    }

    advanceToNextScreen = () => {
      setTimeout(() => {
        this.props.screenUpdate()
      }, 250);
    }

    componentDidUpdate() {
      const s = this.state.bunSauce
      if (s[0] && s[1]) {
        this.advanceToNextScreen()
      }
    }

    render() {
        return (
            <div className='select select-sauce'>
                <div className='msg'>{this.state.msg}</div>
                <BunTop
                  top={`165px`}
                  left={`5px`}
                  bunTop={this.props.tBun}
                  bunTopSauce={this.state.bunSauce[1]}
                />
                <div 
                  className='sauce-button'
                  onClick={() => this.chooseSauce('none', '')}
                  style={{
                      backgroundImage: 'url(' + None + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
                  onClick={() => this.chooseSauce(chipMayo, 'chipmayo')}
                  style={{
                      backgroundImage: 'url(' + chipMayo + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
                  onClick={() => this.chooseSauce(mayo, 'mayo')}
                  style={{
                      backgroundImage: 'url(' + mayo + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
                  onClick={() => this.chooseSauce(relish, 'relish')}
                  style={{
                      backgroundImage: 'url(' + relish + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
                  onClick={() => this.chooseSauce(trickedRelish, 'trickedrelish')}
                  style={{
                      backgroundImage: 'url(' + trickedRelish + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <BunBottom
                  top={`265px`}
                  left={`5px`}
                  bunBottom={this.props.bBun}
                  bunBottomSauce={this.state.bunSauce[0]}
                />
            </div>
        )
    }
}

export default SelectSauce