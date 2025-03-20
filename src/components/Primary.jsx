import React from 'react'
import Current from './Current'

const Primary = ({data,query,setQuery,result,setLat,setLong,hourForecast}) => {
  
  return (
    <>
      <Current data={data} query={query} setQuery={setQuery} result={result} setLat={setLat} setLong={setLong} hourForecast={hourForecast}/>
    </>
  )
}

export default Primary