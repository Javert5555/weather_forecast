const getWeatherForecastData = async (cityName) => {
    try {

        // to do: make a layer on the backend (on NodeJS, python or PHP) to hide Api Key on ajax request
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`, {
            method: 'GET'
        })
    
        const data = await response.json()
        
        if (response.ok) {

            const weatherForecastData = {
                reqStatus: 'ok',
                reqStatusCode: String(data.cod),
                cityName: String(data?.name),
                temp: String(data?.main?.temp),
                description: String(data?.weather[0]?.description),
                humidity: String(data?.main?.humidity),
                windSpeed: String(data?.wind?.speed)
    
            }
            
            return weatherForecastData 
        }

        return {reqStatus: data.cod, message: String(data.message)}
 
    } catch (error) {
        return {reqStatus: 'error', message: String(error.message)} 
    }
}

export default getWeatherForecastData