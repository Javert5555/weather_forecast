import '../../styles/card/day_weather_info.scss'

const DayWeatherInfo = ({ info }) => {
    
    return (
        <div className='day-weather'>
            <div className='day-weather__title'>
                {info}
            </div>

        </div>
    )
}

export default DayWeatherInfo