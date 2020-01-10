import React from 'react'
import Title from './Title'

function Right() {
  return (
    <div style={{ borderLeft: '1px solid #9c9c9c', paddingLeft: 24 }}>
      <Title left>Experience</Title>
      <ul>
        <li>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'bottom'
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 14 }}>US Wheel Corp</div>
            <div style={{ color: '#6c757d' }}>2017 - 2019</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Right
