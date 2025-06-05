import React from 'react'
import AirQuality from './AirQuality'
import WeatherDeatils from './WeatherDetails'


export default function Card() {
    return(
        <>
            <div className='flex flex-col justify-evenly text-center items-center'>
                <WeatherDeatils />
                <AirQuality />
            </div>
        </>
    )
    
}
