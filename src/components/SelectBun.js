import React from 'react'

import '../css/Select.css'

// import whole bun images for button backgrounds
import sesameWhole from '../assets/buns/SesameWhole.png'
import sesameTop from '../assets/buns/SesameTop.png'
import sesameBottom from '../assets/buns/SesameBottom.png'
import jalapenoWhole from '../assets/buns/JalapenoWhole.png'
import jalapenoTop from '../assets/buns/JalapenoTop.png'
import jalapenoBottom from '../assets/buns/JalapenoBottom.png'
import onionWhole from '../assets/buns/OnionWhole.png'
import onionTop from '../assets/buns/OnionTop.png'
import onionBottom from '../assets/buns/OnionBottom.png'
import briocheWhole from '../assets/buns/BriocheWhole.png'
import briocheTop from '../assets/buns/BriocheTop.png'
import briocheBottom from '../assets/buns/BriocheBottom.png'
import wheatWhole from '../assets/buns/WheatWhole.png'
import wheatTop from '../assets/buns/WheatTop.png'
import wheatBottom from '../assets/buns/WheatBottom.png'

class SelectBun extends React.Component {
    
    chooseBun = (topBottom, whole) => {
      this.props.bun(topBottom, whole)
    }

    render() {
        return (
            <div className='select select-bun'>
              Select Bun
              <div 
                className='select-button'
                onClick={() => this.chooseBun([sesameTop, sesameBottom], 'sesame')}
                style={{
                    backgroundImage: 'url(' + sesameWhole + ')',
                    backgroundSize: '100% 100%'
                }}
              ></div>
              <div 
                className='select-button'
                onClick={() => this.chooseBun([jalapenoTop, jalapenoBottom], 'jalapeno')}
                style={{
                    backgroundImage: 'url(' + jalapenoWhole + ')',
                    backgroundSize: '100% 100%'
                }}
              ></div>
              <div 
                className='select-button'
                onClick={() => this.chooseBun([onionTop, onionBottom], 'onion-bun')}
                style={{
                    backgroundImage: 'url(' + onionWhole + ')',
                    backgroundSize: '100% 100%'
                }}
              ></div>
              <div 
                className='select-button'
                onClick={() => this.chooseBun([briocheTop, briocheBottom], 'brioche')}
                style={{
                    backgroundImage: 'url(' + briocheWhole + ')',
                    backgroundSize: '100% 100%'
                }}
              ></div>
              <div 
                className='select-button'
                onClick={() => this.chooseBun([wheatTop, wheatBottom], 'wheat')}
                style={{
                    backgroundImage: 'url(' + wheatWhole + ')',
                    backgroundSize: '100% 100%'
                }}
              ></div>
            </div>
        )
    }
}

export default SelectBun