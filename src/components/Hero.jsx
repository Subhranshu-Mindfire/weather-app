import React, { useEffect, useState } from 'react'
import Primary from './Primary'
import Secondary from './Secondary'
import axios from "axios"

const Hero = () => {

  const [data, setData] = useState({})

  async function getWeatherInfo() {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: "Bhubaneshwar",
          appid: "a50afa1dcea7286614a3fdecc403bade"
        }
      })
      console.log(response);
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWeatherInfo()
  },[])

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