import React from 'react'
import "./Current.css"

const Current = () => {
  return (
    <>
      <div className="top d-flex justify-content-between mt-3 fw-medium fs-3">
        <div className="location">Bhubneswar</div>
        <div className="date">19-Mar-2025</div>
      </div>
      <div className="bottom d-flex flex-column">
        <div className='text-secondary text-center'>
          <div className="temp">
            &nbsp;38&deg;  
          </div>
          <div className="type fs-1">
            Cloudy
          </div>
        </div>
        <div className="other d-flex justify-content-evenly fs-3 text-dark">
          <div className="wind">
            2 kph
          </div>
          <div className="humidity">
            90%
          </div>
        </div>
      </div>
    </>
  )
}

export default Current