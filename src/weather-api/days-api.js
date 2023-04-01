const getWeatherForecastData = async (cityName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`, {
            method: 'GET'
        });
    
        const weatherForecastData = await response.json()
        console.log(weatherForecastData)
        
        return weatherForecastData  
    } catch (error) {
        return error
    }
}

export default getWeatherForecastData