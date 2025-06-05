import React from 'react';
import { useWeather } from '../context/Context';

export default function AirQuality() {
    const { weatherData } = useWeather();
    const aqi = weatherData?.current?.air_quality || {};
    const { co, no2, o3, so2, pm2_5, pm10 } = aqi;
    const usEpaIndex = aqi["us-epa-index"];

    return (
        <div className="bg-[rgba(255,255,255,0.1)] text-white p-2 mx-auto my-[5rem] w-[70vw] rounded-lg">
            <h1 className="underline text-2xl">Air Quality Index</h1>
            <ul className="my-4 gap-5">
                <li className="flex flex-row justify-between">
                    <p>CO</p>
                    <p>{`${co}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>NO2</p>
                    <p>{`${no2}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>O3</p>
                    <p>{`${o3}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>SO2</p>
                    <p>{`${so2}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>PM2.5</p>
                    <p>{`${pm2_5}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>PM10</p>
                    <p>{`${pm10}`}</p>
                </li>
                <br />
                <li className="flex flex-row justify-between">
                    <p>EQI</p>
                    <p>{`${usEpaIndex}`}</p>
                </li>
            </ul>
        </div>
    );
}