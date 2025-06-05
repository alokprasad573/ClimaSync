import React from "react";
import { useWeather } from "../context/Context";


export default function Header() {
    const { weatherData } = useWeather();

    return (
        <div className="flex flex-col justify-center items-center flex-wrap gap-3 text-center  my-5">
            <h1 className='header text-center text-5xl my-5'>ClimaSync</h1>
            { weatherData && <p>Time-Zone :- {`${weatherData.location.tz_id}`}</p>} 
            { weatherData && <p>Local Time :- {`${new Date(weatherData.location.localtime).toLocaleString()}`}</p>}
        </div>
    );
}