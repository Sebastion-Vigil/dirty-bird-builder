import React from 'react'

import '../css/Bun.css'

const BunTop = props => {
  return (
    <div
      className='bun top'
      style={{
        top: props.top,
        left: props.left
      }}
    >
      <div
        className='top-bun'
        style={{
          backgroundImage: 'url(' + props.bunTop + ')',
          backgroundSize: '100% 100%'
        }}
      ></div>
      <div
        className='top-bun-sauce'
        style={{
          backgroundImage: 'url(' + props.bunTopSauce + ')',
          backgroundSize: '100% 100%'
        }}
      ></div>
    </div>
  )
}

export default BunTop
