import React from 'react'
import Navbar from './components/Navabar';
import Card from './components/Card';
import Header from './components/Header';  
import SearchBar from './components/SearchBar'; 
import { useWeather } from './context/Context';


export default function WeatherApp() {
    const { weatherData } = useWeather();
    const weather = weatherData?.current || {};

    console.log(weather)

    return (
        <>
        { weather.is_day ? 
        <div className='bg-[url(../src/assets/day_image.png)] bg-cover'>
            <Navbar />
            <Header />
            <SearchBar />
            <Card />
        </div> :
        <div className='bg-[url(../src/assets/night_image.png)] bg-cover'>
            <Navbar />
            <Header />
            <SearchBar />
            <Card />
        </div> }
        </>
        
        
    );
}