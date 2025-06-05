import React from "react";
import { useWeather } from "../context/Context";


export default function Header() {
    const { weatherData } = useWeather();
    console.log(weatherData);

    return (
        <div className="flex flex-col justify-center items-center flex-wrap gap-3 text-center  my-5">
            { weatherData && <div className="flex flex-row justify-start items-center text-5xl">
                <p>{`${weatherData.current.temp_c}`}&#x2103;</p>
                <img src={`${weatherData.current.condition.icon}`} alt="icon" className="w-[100px]" />
                <p className="text-4xl">{`${weatherData.current.condition.text}`}</p>
            </div>}
            { weatherData && <div className='location'>
                <p className='text-2xl'>
                    <i className="fa-solid fa-location-dot"></i>
                    &nbsp;&nbsp;{`${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`}
                </p>
            </div>}
        </div>
    );
}