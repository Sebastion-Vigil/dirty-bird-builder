import React from 'react'

// import top and bottom bun components
import BunTop from './BunTop.js'
import BunBottom from './BunBottom.js'

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
        onBottomBun: true,
        topSauce: '',
        bottomSauce: '',
        msg: 'Sauce for bottom bun, if any',
    }

    render() {
        return (
            <div className='select select-sauce'>
                <div className='msg'>{this.state.msg}</div>
                <BunTop
                  top={`165px`}
                  left={`5px`}
                  bunTop={this.props.tBun}
                  bunTopSauce={``}
                />
                <div 
                  className='sauce-button'
                  style={{
                      backgroundImage: 'url(' + None + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
                  style={{
                      backgroundImage: 'url(' + chipMayo + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
                  style={{
                      backgroundImage: 'url(' + mayo + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
                  style={{
                      backgroundImage: 'url(' + relish + ')',
                      backgroundSize: '100% 100%'
                  }}
                >
                </div>
                <div 
                  className='sauce-button'
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
                  bunBottomSauce={``}
                />
            </div>
        )
    }
}

export default SelectSauce