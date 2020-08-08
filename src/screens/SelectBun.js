import React from 'react'

import '../css/Select.css'

// import whole bun images for button backgrounds
import sesameWhole from '../assets/imgs/buns/SesameWhole.png'
import sesameTop from '../assets/imgs/buns/SesameTop.png'
import sesameBottom from '../assets/imgs/buns/SesameBottom.png'
import jalapenoWhole from '../assets/imgs/buns/JalapenoWhole.png'
import jalapenoTop from '../assets/imgs/buns/JalapenoTop.png'
import jalapenoBottom from '../assets/imgs/buns/JalapenoBottom.png'
import onionWhole from '../assets/imgs/buns/OnionWhole.png'
import onionTop from '../assets/imgs/buns/OnionTop.png'
import onionBottom from '../assets/imgs/buns/OnionBottom.png'
import briocheWhole from '../assets/imgs/buns/BriocheWhole.png'
import briocheTop from '../assets/imgs/buns/BriocheTop.png'
import briocheBottom from '../assets/imgs/buns/BriocheBottom.png'
import wheatWhole from '../assets/imgs/buns/WheatWhole.png'
import wheatTop from '../assets/imgs/buns/WheatTop.png'
import wheatBottom from '../assets/imgs/buns/WheatBottom.png'

class SelectBun extends React.Component {
    
    chooseBun = (bunArr, str) => {
      this.props.bun(bunArr, str)
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