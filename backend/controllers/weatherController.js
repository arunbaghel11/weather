const axios = require('axios');
const Weather = require('../models/Weather');

const fetchWeatherData = async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: 'Mumbai',
                appid: process.env.OPENWEATHER_API_KEY,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

module.exports = { fetchWeatherData };
