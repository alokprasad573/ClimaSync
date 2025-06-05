import { createContext, useContext, useState } from "react";
import { getWeatherForCity, getWeatherForLocation } from "../api/index";

const weatherContext = createContext(null);

export const useWeather = () => {
    return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [searchCity, setSearchCity] = useState("");

    const fetchWeatherData = async () => {
        try {
            const data = await getWeatherForCity(searchCity);
            if (!data || !data.location) {
                alert("Invalid city name or no weather data found. Please try again.");
                setWeatherData(null);
            }
            setWeatherData(data);
        } catch (error) {
            alert("Invalid city name or no weather data found. Please try again.");
            console.error("Failed to fetch weather data:", error);
            setWeatherData(null);
        }
    };

    const fetchCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            getWeatherForLocation(position.coords.latitude, position.coords.longitude)
                .then((data) => {
                    if (!data || !data.location) {
                        throw new Error("Invalid weather data received for current location");
                    }
                    setWeatherData(data);
                })
                .catch((error) => {
                    console.error("Failed to fetch current location weather data:", error);
                    setWeatherData(null);
                });
        });
    };

    return (
        <weatherContext.Provider
            value={{
                weatherData,
                searchCity,
                setSearchCity,
                fetchWeatherData,
                fetchCurrentLocationData,
            }}
        >
            {props.children}
        </weatherContext.Provider>
    );
};