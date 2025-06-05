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
        <div className="navbar z-10 flex flex-wrap flex-row justify-between items-center gap-2 mb-[5rem] py-2 px-8 text-white bg-[rgba(220,220,220,0.1)]">
            <h1 className='header text-center text-5xl my-5'>ClimaSync</h1>
            <div className="flex flex-col items-start text-md">
                { weatherData && <p>Time-Zone :- {`${weatherData.location.tz_id}`}</p>} 
                { weatherData && <p>Local Time :-{`${new Date(weatherData.location.localtime).toLocaleString()}`}</p>}
            </div>
        </div>
    );
}