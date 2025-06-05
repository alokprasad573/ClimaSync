import React from 'react';
import { useWeather } from "../context/Context";

export default function Navbar() {
    const { weatherData } = useWeather();

    // Handle case where weatherData or its properties are not yet loaded
    if (!weatherData || !weatherData.current || !weatherData.location) {
        return (
            <div className="navbar z-10 flex flex-wrap flex-row justify-between items-center mb-[5rem] px-8 text-white bg-[rgba(220,220,220,0.1)]">
                <div>
                    <p>--&#x2103;</p>
                </div>
                <div className="flex flex-row justify-start items-center ">
                    <span className="text-xl">Loading...</span>
                </div>
                <div className='location'>
                    <p className='text-2xl'>
                        <i className="fa-solid fa-location-dot"></i>
                        &nbsp;&nbsp;Location not available
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="navbar z-10 flex flex-wrap flex-row justify-between items-center mb-[5rem] px-8 text-white bg-[rgba(220,220,220,0.1)]">
            <div className="flex flex-row justify-start items-center text-3xl">
                <p>{`${weatherData.current.temp_c}`}&#x2103;</p>
                <img src={`${weatherData.current.condition.icon}`} alt="icon" />
                <p className="text-xl">{`${weatherData.current.condition.text}`}</p>
            </div>
            <div className='location'>
                <p className='text-2xl'>
                    <i className="fa-solid fa-location-dot"></i>
                    &nbsp;&nbsp;{`${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`}
                </p>
            </div>
        </div>
    );
}