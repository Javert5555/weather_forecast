import '../../styles/card/today_weather_city.scss'

const TodayWeatherCity = ({ city }) => {
    
    return (
        <div className='today-weather-city'>
            <p className='today-weather-city__name-city'>{city}</p>
            <div className='today-weather-city__horizontal-line'></div>
        </div>
    )
}

export default TodayWeatherCity