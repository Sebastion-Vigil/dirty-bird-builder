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
        msg: 'Select Cheese',
        selectionMade: false
    }

    chooseCheese = (c, s) => {
      this.props.cheeseUpdate(c, s)
      const newMsg = s + ' selected'
      this.setState({
          msg: newMsg,
          selectionMade: true
      })
    }

    advanceToNextScreen = () => {
        setTimeout(() => {
          this.props.screenUpdate()
        }, 1500);
      }

    componentDidUpdate() {
      if (this.state.selectionMade) {
          this.advanceToNextScreen()
      }
    }

    render() {
        return (
            <div className='select select-cheese'>
                <div className='msg'>{this.state.msg}</div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(american, 'american')}
                  style={{
                      backgroundImage: 'url(' + american + ')',
                      backgroundSize: '100% 100%'
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(cheddar, 'cheddar')}
                  style={{
                      backgroundImage: 'url(' + cheddar + ')',
                      backgroundSize: '100% 100%'
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(pepperjack, 'pepperjack')}
                  style={{
                      backgroundImage: 'url(' + pepperjack + ')',
                      backgroundSize: '100% 100%'
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(provolone, 'provolone')}
                  style={{
                      backgroundImage: 'url(' + provolone + ')',
                      backgroundSize: '100% 100%'
                  }}
                ></div>
                <div 
                  className='select-button'
                  onClick={() => this.chooseCheese(swiss, 'swiss')}
                  style={{
                      backgroundImage: 'url(' + swiss + ')',
                      backgroundSize: '100% 100%'
                  }}
                ></div>
            </div>
        )
    }
}

export default SelectCheese