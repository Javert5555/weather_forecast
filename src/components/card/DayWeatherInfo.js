import '../../styles/card/day_weather_info.scss'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import CloudIcon from '@mui/icons-material/Cloud'
import OpacityIcon from '@mui/icons-material/Opacity'
import AirIcon from '@mui/icons-material/Air'

const DayWeatherInfo = ({ dayTitle }) => {
    
    return (
        <div className='day-weather'>
            <div className='day-weather__title'>
                {dayTitle}
            </div>
            <div className='day-weather__info'>
                <p className='day-weather__temperature'><DeviceThermostatIcon className='day-weather__icon' />1111</p>
                <p className='day-weather__cloudiness'><CloudIcon className='day-weather__icon' />1111</p>
                <p className='day-weather__humidity'><OpacityIcon className='day-weather__icon' />1111</p>
                <p className='day-weather__wind'><AirIcon className='day-weather__icon' />1111</p>
            </div>

        </div>
    )
}

export default DayWeatherInfo