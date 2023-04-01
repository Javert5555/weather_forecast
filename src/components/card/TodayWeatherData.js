import '../../styles/card/today_weather_data.scss'

const TodayWeatherData = ({ temperature, cloudiness, humidity, wind }) => {

    return (
            <div className='today-weather-data'>
                <div className='today-weather-data__cloudiness-temperature'>
                    <div className='today-weather-data__temperature'>
                        {isNaN(temperature) ? temperature : Math.round(temperature)  }
                        <span className='today-weather-data__temperature-degree'>°</span>
                    </div>
                    <div className='today-weather-data__cloudiness'>{cloudiness}</div>
                </div>
                <div className='today-weather-data__humidity-wind'>
                    <div className='today-weather-data__humidity'>
                        <p>Влажность</p>
                        <div>{humidity} %</div>
                    </div>
                    <div className='today-weather-data__vertical-line'></div>
                    <div className='today-weather-data__wind'>
                        <p>Ветер</p>
                        <div>{wind} М/С</div>
                    </div>
                </div>
            </div>
    )
}

export default TodayWeatherData