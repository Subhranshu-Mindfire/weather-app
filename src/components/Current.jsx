import React, { useState,useEffect } from 'react'
import "./Current.css"

const Current = ({ data, query, setQuery, result, setLat, setLong,hourForecast}) => {
  // console.log(data, result);
  const [name, setName] = useState("Bhubaneswar")
  const getWeekDay = (num) =>{
    switch (num) {
      case 0:
        return "Sunday"
        break;
      case 1:
        return("Monday")
        break;
      case 2:
        return("Tuesday")
        break;
      case 3:
        return("Wednesday")
        break;
      case 4:
        return("Thursday")
        break;
      case 5:
        return("Friday")
        break;
      case 6:
        return("Saturday")
    }
  }

  console.log(data);
  
  return (
    <>
      <div className="top d-flex justify-content-between mt-3 fw-medium fs-3 text-dark px-5">
        <div className="location">{name}</div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        { result ? 
          result.map((city) => 
            <div className='' onClick={()=>{
              setLat(city.lat)
              setLong(city.lon)
              setName(city.name)
              setQuery("")
              }}>
              {city.name} {city.state} {city.country}
            </div>
          )
         : (
          <></>
        )}
        <div className="date">{new Intl.DateTimeFormat('en-GB',{year:"numeric", month:"short",day:"2-digit"}).format(new Date).split(" ").join(" ")}</div>
      </div>
      <div className="bottom d-flex flex-column">
        <div className='text-secondary text-center'>
          <div className="temp">
            &nbsp;{(data?.main?.temp - 273).toFixed(0)}&deg;
          </div>
          <div className="type fs-1">
            {data?.weather?.[0]?.main}
          </div>
        </div>
        <div className="other d-flex justify-content-evenly fs-3 mx-5 text-secondary">
          <div className="wind">
            <i class="fa-solid fa-wind"></i> {data?.wind?.speed} k/h
          </div>
          <div className="humidity">
            <i class="fa-solid fa-droplet"></i> {data?.main?.humidity}
          </div>
        </div>
      </div>

      <div className="weekly mt-5 pt-3">
        <div className="d-flex mt-3 flex-wrap mx-3 gap-3 justify-content-center">
        {hourForecast?.list?.map((hour)=>
          (new Date(hour.dt_txt)).getHours("en-US") == 12 ? 
            <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center'>
              <div className="top">
                {getWeekDay((new Date(hour.dt_txt)).getDay("en-US"))}
              </div>
              <div className="middle fs-2">
              &nbsp;{(hour?.main?.temp - 273).toFixed()}&deg;
              </div>
              <div className="bottom opacity-50">
                {hour.weather?.[0]?.main}
              </div>
            </div>
          :
          <></>
        )}
        </div>
      </div>
    </>
  )
}

export default Current