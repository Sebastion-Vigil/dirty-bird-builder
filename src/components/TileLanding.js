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
                border: this.props.border
            }}
          >
          </div>
        )
    }
}

export default TileLanding