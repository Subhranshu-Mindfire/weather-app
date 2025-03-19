import React from 'react'

const Secondary = () => {
  return (
    <>
      <div className='greetings h1 text-center my-3 text-white mt-5'>
        Good Morning
      </div>
      <div className="time text-white text-center h2">
        12:27 PM
      </div>
      <div className="bottom d-flex flex-column mt-3">
        <div className='text-secondary text-center'>
          <div className=" little-temp fs-2 ">
            &nbsp;38&deg;
          </div>
          <div className="type fs-3">
            Cloudy
          </div>
        </div>
        <div className="other d-flex justify-content-evenly fs-5 mx-5 text-secondary mt-3">
          <div className="wind">
            <i class="fa-solid fa-wind"></i> 2 kph
          </div>
          <div className="humidity">
            <i class="fa-solid fa-droplet"></i> 90%
          </div>
        </div>
      </div>
      <div className="hourly">
        <h3 className='text-center text-white mt-5'>Hourly Forecast</h3>
      </div>

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
        
      </div>

    </>
  )
}

export default Secondary