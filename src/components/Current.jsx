import React from 'react'
import "./Current.css"
import { useState } from 'react'

const Current = (props) => {
  console.log(props.data);
  
  return (
    <>
      <div className="top d-flex justify-content-between mt-3 fw-medium fs-3 text-dark px-5">
        <div className="location">Bhubaneswar</div>
        <div className="date">19.03.2025</div>
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
        <div className="other d-flex justify-content-evenly fs-3 mx-5 text-secondary">
          <div className="wind">
            <i class="fa-solid fa-wind"></i> 2 kph
          </div>
          <div className="humidity">
            <i class="fa-solid fa-droplet"></i> 90%
          </div>
        </div>
      </div>

      <div className="weekly mt-5 pt-3">
        <div className="d-flex mt-3 flex-wrap mx-3 gap-3 justify-content-center">
          <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center '>
            <div className="top">
              1 PM
            </div>
            <div className="middle fs-2">
              &nbsp;38&deg;
            </div>
            <div className="bottom opacity-50">
              Cloudy
            </div>
          </div>
          <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center '>
            <div className="top">
              1 PM
            </div>
            <div className="middle fs-2">
              &nbsp;38&deg;
            </div>
            <div className="bottom opacity-50">
              Cloudy
            </div>
          </div>
          <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center '>
            <div className="top">
              1 PM
            </div>
            <div className="middle fs-2">
              &nbsp;38&deg;
            </div>
            <div className="bottom opacity-50">
              Cloudy
            </div>
          </div>
          <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center '>
            <div className="top">
              1 PM
            </div>
            <div className="middle fs-2">
              &nbsp;38&deg;
            </div>
            <div className="bottom opacity-50">
              Cloudy
            </div>
          </div>
          <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center '>
            <div className="top">
              1 PM
            </div>
            <div className="middle fs-2">
              &nbsp;38&deg;
            </div>
            <div className="bottom opacity-50">
              Cloudy
            </div>
          </div>
          <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center '>
            <div className="top">
              1 PM
            </div>
            <div className="middle fs-2">
              &nbsp;38&deg;
            </div>
            <div className="bottom opacity-50">
              Cloudy
            </div>
          </div>
          <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center '>
            <div className="top">
              1 PM
            </div>
            <div className="middle fs-2">
              &nbsp;38&deg;
            </div>
            <div className="bottom opacity-50">
              Cloudy
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Current