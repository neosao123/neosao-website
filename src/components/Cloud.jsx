import React from 'react'
import '../assets/style/cloud.css'

import cloud1 from '../assets/images/cloud1.png'
import cloud2 from '../assets/images/cloud2.png'

const Cloud = () => {
  return (
    <div className='cloud-cloud'>
      <div className="top-cloud">
        <img src={cloud2} alt="Cloud 2" />
      </div>
      <div className="top-cloud1">
        <img src={cloud1} alt="Cloud 1" />
      </div>

    </div>
  )
}

export default Cloud