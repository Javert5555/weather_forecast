import { Fragment } from 'react'
import '../../styles/card/today_weather_data.scss'


const TodayWeatherData = () => {

    return (
            <div className='today-weather-data'>
                <div className='today-weather-data__cloudiness-temperature'>
                    <div className='today-weather-data__temperature'>
                        12
                        <span className='today-weather-data__temperature-degree'>°</span>
                    </div>
                    <div className='today-weather-data__cloudiness'>Облачно</div>
                </div>
                <div className='today-weather-data__humidity-wind'>
                    <div className='today-weather-data__humidity'>
                        <p>Влажность</p>
                        <div>64 %</div>
                    </div>
                    <div className='today-weather-data__vertical-line'></div>
                    <div className='today-weather-data__wind'>
                        <p>Ветер</p>
                        <div>12 М/С</div>
                    </div>
                </div>
            </div>
    )
}

export default TodayWeatherData