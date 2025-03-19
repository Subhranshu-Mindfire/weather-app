import React from 'react'
import Primary from './Primary'
import Secondary from './Secondary'

const Hero = () => {
  return (
    <div className='bg-white h-75 px-5 w-75 m-auto rounded-5 row'>
      <div className='col-md-8'>
        <Primary/>
      </div>
      <div className='col-md-4'>
        <Secondary/>
      </div>
    </div>
  )
}

export default Hero