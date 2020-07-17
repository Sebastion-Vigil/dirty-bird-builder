import React from 'react'

import '../css/Bun.css'

const BunBottom = props => {
  return (
    <div
      className='bun bottom'
      style={{
        top: props.top,
        left: props.left
      }}
    >
      <div
        className='bottom-sauce'
        style={{
          backgroundImage: 'url(' + props.bunBottomSauce + ')',
          backgroundSize: '100% 100%'
        }}
      ></div>
      <div
        className='bottom-bun'
        style={{
          backgroundImage: 'url(' + props.bunBottom + ')',
          backgroundSize: '100% 100%'
        }}
      ></div>
    </div>
  )
}

export default BunBottom
