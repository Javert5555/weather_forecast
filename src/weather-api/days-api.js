const getWeatherForecastData = async (cityName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`, {
            method: 'GET'
        });
    
        const weatherForecastData = await response.json()
        
        return weatherForecastData  
    } catch (error) {
        return error
    }
}

export default getWeatherForecastData