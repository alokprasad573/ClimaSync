import React from "react";
import { useWeather } from "../context/Context";


export default function SearchBar() {

    const weather = useWeather();
    
    React.useEffect(() => {
            // Fetch weather data for the user's current location when the component mounts
            weather.fetchCurrentLocationData();
    },[]);

    return (
        <div className="search-bar flex flex-row justify-center gap-4  mx-2">
            <input
                type="text"
                placeholder="Search for a city..."
                value={weather.searchCity}
                onChange={(e) => weather.setSearchCity(e.target.value)}
                className="search-input w-[40vw] h-[3rem] rounded-full px-4 bg-white text-black"/>
            <button 
                onClick={weather.fetchWeatherData}
                className="search-button w-[content] h-[content] cursor-pointer bg-indigo-900 p-3 rounded-4xl hover:bg-indigo-700 text-white transition-all duration-300">
                <i className="fa-solid fa-magnifying-glass me-2"></i>Search
            </button>
        </div>
    );
}