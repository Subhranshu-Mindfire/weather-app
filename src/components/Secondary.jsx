import React from 'react'

const Secondary = ({data, hourForecast}) => {
  console.log(hourForecast);

  const getMessage = () =>{
    if (new Date().getHours('en-US') > 21){
      return "Good Night"
    }
    else if(new Date().getHours('en-US') > 18)
    {
      return "Good Evening"
    }
    else if(new Date().getHours('en-US') > 12)
    {
      return "Good Afternoon"
    }
    else{
      return "Good Morning"
    }
  }
  
  return (
    <>
      <div className='greetings h1 text-center my-3 text-white mt-4'>
        {getMessage()}
      </div>
      <div className="time text-white text-center h2">
        {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
      </div>
      <div className="bottom d-flex flex-column mt-3">
        <div className='text-secondary text-center'>
          <div className=" little-temp fs-2 ">
            &nbsp;{((data?.main?.temp) - 273)?.toFixed()}&deg;
          </div>
          <div className="type fs-3">
            {data?.weather?.[0]?.main}
          </div>
        </div>
        <div className="other d-flex justify-content-evenly fs-5 mx-5 text-secondary mt-3">
          <div className="wind">
            <i class="fa-solid fa-wind"></i> {data?.wind?.speed}
          </div>
          <div className="humidity">
            <i class="fa-solid fa-droplet"></i> {data?.main?.humidity}
          </div>
        </div>
      </div>
      <div className="hourly">
        <h3 className='text-center text-white mt-2'>Hourly Forecast</h3>
      </div>
      <div className="d-flex mt-3 flex-wrap mx-3 gap-3 justify-content-center pb-3">

        {hourForecast?.list?.slice(0,6)?.map((hour)=>
          (new Date(hour.dt_txt)) > (new Date()) && new Date(hour.dt_txt).getDate("en-US") == new Date().getDate("en-US") ? 
            <div className='card bg-white text-dark py-2 px-4 d-flex flex-column gap-3 text-center'>
              <div className="top">
                {(new Date(hour.dt_txt)).getHours("en-US") < 13 ? (new Date(hour.dt_txt)).getHours("en-US") : ((new Date(hour.dt_txt)).getHours("en-US")) - 12 } {(new Date(hour.dt_txt)).getHours("en-US")> 11 ? "PM" : "AM"}
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

    </>
  )
}

export default Secondary