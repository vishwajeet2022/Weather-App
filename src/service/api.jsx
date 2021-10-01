import axios from 'axios';

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY= '54af9e0f847a1f3e3397b0fbbdc2c053';

export const getData = async(city, country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}