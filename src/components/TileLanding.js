import React from 'react'

import '../css/TileLanding.css'

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
          </div>
        )
    }
}

export default TileLanding