const getWeatherForecastData = async () => {
    
    const response = await fetch('https://api.gismeteo.net/v2/weather/current/?latitude=54.35&longitude=52.52', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'X-Gismeteo-Token': '56b30cb255.3443075'
        }
    });

    const weatherForecastData = await response.text()
    
    return(weatherForecastData)
}

export default getWeatherForecastData