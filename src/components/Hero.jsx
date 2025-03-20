import React, { useEffect, useState } from 'react'
import Primary from './Primary'
import Secondary from './Secondary'
import axios from "axios"

const Hero = () => {

  const [data, setData] = useState({})
  const [lat, setLat] = useState("20.2960")
  const [long, setLong] = useState("85.8246")
  const [query, setQuery] = useState("")
  const [result, setResult] = useState([])
  const [hourForecast, setHourForecast] = useState({})

  async function getWeatherFromCordinates() {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: lat,
          lon:long,
          appid: "a50afa1dcea7286614a3fdecc403bade"
        }
      })
      console.log(response.data);
      setData(response.data)
      setResult("")
    } catch (error) {
      console.error(error);
    }
  }
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
  async function getCity() {
    try {
      const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
          q: query,
          limit:"5",
          appid: "a50afa1dcea7286614a3fdecc403bade"
        }
      })
      console.log(response.data);
      setResult(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  async function getWeatherForecast() {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
          lat: lat,
          lon: long,
          appid: "a50afa1dcea7286614a3fdecc403bade"
        }
      })
      console.log("forecast",response.data);
      setHourForecast(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (query != "")
    {
      getCity()
    }
  }, [query])
  
  useEffect(() => {
    getWeatherInfo()
    console.log("Hii");
    
    getWeatherForecast()
  },[])

  useEffect(() => {
    if (long != "") {
      getWeatherFromCordinates()
      getWeatherForecast()
    }
  },[long])

  return (
    <div className='bg-white h-75 w-75 m-auto rounded-5 row shadow-lg'>
      <div className='col-md-8'>
        <Primary data={data} query={query} setQuery={setQuery} result={result} setLat={setLat} setLong={setLong} hourForecast={hourForecast}/>
      </div>
      <div className='col-md-4 bg-dark rounded-5 rounded-start'>
        <Secondary data={data} hourForecast={hourForecast}/>
      </div>
    </div>
  )
}

export default Hero