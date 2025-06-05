
import axios from 'axios';


const BASE_URL = import.meta.env.VITE_API_KEY;

export const getWeatherForCity = async(city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${BASE_URL}&q=${city}&aqi=yes`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getWeatherForLocation = async(lat, long) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${BASE_URL}&q=${lat},${long}&aqi=yes`)
        return response.data;
    } catch (error) {
        throw error;
    }
}