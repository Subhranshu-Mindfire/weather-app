import React, { useEffect, useState } from 'react'
import Primary from './Primary'
import Secondary from './Secondary'

const Hero = () => {

  const [data, setData] = useState("")

  useEffect(() => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=bhubaneshwar&appid=a50afa1dcea7286614a3fdecc403bade"

    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setData(data)
    })
  }, [])

  return (
    <div className='bg-white h-75 w-75 m-auto rounded-5 row shadow-lg'>
      <div className='col-md-8'>
        <Primary data={data}/>
      </div>
      <div className='col-md-4 bg-dark rounded-5 rounded-start'>
        <Secondary data={data}/>
      </div>
    </div>
  )
}

export default Hero