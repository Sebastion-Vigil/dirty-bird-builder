import React from 'react'

import '../css/Select.css'

// import meat images for button backgrounds
import beef from '../assets/meats/Beef.png'
import crispyChx from '../assets/meats/CrispyChx.png'
import grilledChx from '../assets/meats/GrilledChx.png'
import impossible from '../assets/meats/Impossible.png'
import veggie from '../assets/meats/Veggie.png'

class SelectMeat extends React.Component {
    
    state = {
        msg: 'Select Meat',
        selectionMade: false
    }
    // m = meat img address, s = meat str
    chooseMeat = (m, s) => {
      this.props.meatUpdate(m, s)
      const newMsg = s + ' selected'
      this.setState({
          msg: newMsg,
          selectionMade: true
      })
    }   

    advanceToNextScreen = () => {
        setTimeout(() => {
          this.props.screenUpdate()
        }, 250);
      }

    componentDidUpdate() {
      if (this.state.selectionMade) {
          this.advanceToNextScreen()
      }
    }

    render() {
        return (
            <div className='select select-meat'>
              <div className='msg'>{this.state.msg}</div>
              <div 
                className='select-button'
                onClick={() => this.chooseMeat(beef, 'beef')}
                style={{
                    backgroundImage: 'url(' + beef + ')',
                    backgroundSize: '100% 100%'
                }}
              >
              </div>
              <div 
                className='select-button'
                onClick={() => this.chooseMeat(crispyChx, 'crispychx')}
                style={{
                    backgroundImage: 'url(' + crispyChx + ')',
                    backgroundSize: '100% 100%'
                }}
              >
              </div>
              <div 
                className='select-button'
                onClick={() => this.chooseMeat(grilledChx, 'grilledChx')}
                style={{
                    backgroundImage: 'url(' + grilledChx + ')',
                    backgroundSize: '100% 100%'
                }}
              >
              </div>
              <div 
                className='select-button'
                onClick={() => this.chooseMeat(impossible, 'impossible')}
                style={{
                    backgroundImage: 'url(' + impossible + ')',
                    backgroundSize: '100% 100%'
                }}
              >
              </div>
              <div 
                className='select-button'
                onClick={() => this.chooseMeat(veggie, 'veggie')}
                style={{
                    backgroundImage: 'url(' + veggie + ')',
                    backgroundSize: '100% 100%'
                }}
              >
              </div>
            </div>
        )
    }
}

export default SelectMeat