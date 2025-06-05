import React from 'react'
import { useWeather } from '../context/Context';

export default function WeatherDeatils() {

    const { weatherData } = useWeather();
    const weather = weatherData?.current || {};
    
    return (
        <div className='bg-[rgba(255,255,255,0.1)] text-white p-4 mx-[8rem] my-[5rem] w-[70vw] rounded-lg'>
            <h1 className='underline text-2xl'>Weather</h1>
            <ul className='my-4 gap-5'>
                <li className="flex flex-row justify-between">
                    <p>Temperature</p>
                    <p>{`${weather.temp_c}`}&#x2103;</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Real Feel</p>
                    <p>{`${weather.feelslike_c}`}&#x2103;</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Dew</p>
                    <p>{`${weather.dewpoint_c}`}&#x2103;</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>HeatIndex</p>
                    <p>{`${weather.heatindex_c}`}&#x2103;</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Humidity</p>
                    <p>{`${weather.humidity}`}</p>
                </li>
                <br />
                <li className='flex flex-row justify-between'>
                    <p>Clouds</p>
                    <p>{`${weather.cloud}`}%</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>UV Index</p>
                    <p>{`${weather.uv}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Gust</p>
                    <p>{`${weather.gust_kph}`}Kmph</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Wind Speed</p>
                    <p>{`${weather.wind_kph}`}Kmph</p>
                </li >
                <br />
                <li className="flex flex-row justify-between">
                    <p>Wind Direction</p>
                    <p>{`${weather.wind_degree}`}&deg;,{`${weather.wind_dir}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Wind Teperatue</p>
                    <p>{`${weather.windchill_c}`}&#x2103;</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Visibility</p>
                    <p>{`${weather.vis_km}`}Kmph</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Pressure</p>
                    <p>{`${weather.pressure_mb}`}mb</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>Percipitation</p>
                    <p>{`${weather.precip_mm}`}mm</p>
                </li>
            </ul>
        </div>
    );
}