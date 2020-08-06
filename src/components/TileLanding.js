import React from 'react'

import '../css/Tile.css'

class TileLanding extends React.Component {
    render() {
        return (
          <div 
            className='tile-landing'
            style={{
                left: this.props.x,
                top: this.props.y,
                backgroundColor: this.props.color,
                border: this.props.border,
                backgroundImage: 'url(' + this.props.droppedImg + ')',
                backgroundSize: '100% 100%'
            }}
            id={this.props.id}
          >
            <div 
              className='landing-chz'
              style={{
                backgroundImage: 'url(' + this.props.landingChz3 + ')',
                backgroundSize: '100% 100%'
              }}
            >
            </div>
            <div 
              className='landing-chz'
              style={{
                backgroundImage: 'url(' + this.props.landingChz2 + ')',
                backgroundSize: '100% 100%'
              }}
            >
            </div>
            <div 
              className='landing-chz'
              style={{
                backgroundImage: 'url(' + this.props.landingChz1 + ')',
                backgroundSize: '100% 100%'
              }}
            >
            </div>
            <div 
              className='landing-meat'
              style={{
                backgroundImage: 'url(' + this.props.landingMeat + ')',
                backgroundSize: '100% 100%'
              }}
            >
            </div>
          </div>
        )
    }
}

export default TileLanding