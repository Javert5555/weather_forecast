import React, { useEffect, useState } from 'react'
import '../../styles/core/menu.scss'
import CastleIcon from '@mui/icons-material/Castle';
import { getWeatherForecastData, getFiveDaysWeatherForecastData } from '../../weather-api/forecastWeatherApi'

const Menu = ({ setCity, setTemperature, setCloudiness, setHumidity, setWind }) => {

    let [inputCityName, setInputCityName] = useState('Krasnodar')

    const weekDays = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const months=[
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Ноября',
        'Декабря',
    ];
    let time = new Date()

    let [numDay, setNumDay] = useState(time.getDate())
    let [numWeekDay, setNumWeekDay] = useState(time.getDay())
    let [numMonth, setNumMonth] = useState(time.getMonth())

    const weatherForecastDataHandler = async (e) => {
        e.preventDefault()

        const response = await getWeatherForecastData(inputCityName)
        
        if (response.reqStatus === 'ok') {
            setCity(response.cityName)
            setTemperature(response.temp)
            setCloudiness(response.description)
            setHumidity(response.humidity)
            setWind(response.windSpeed)
            return
        }

        alert(response.message.toUpperCase())
        return

    }

    useEffect(() => {
        // console.log(getFiveDaysWeatherForecastData('Krasnodar'))
        const getDateEverySecond = setInterval(() => {
            let timeNow = new Date()
            setNumDay(timeNow.getDate())
            setNumWeekDay(timeNow.getDay())
            setNumMonth(timeNow.getMonth())
        }, 1000)
        return () => clearInterval(getDateEverySecond)
    }, [])
    
    return (
        <header className='menu'>
            <div className='menu__container'>
                <div className="menu__text-logo-and-name">
                    <p className="menu__text-logo-name">
                        <a href='/'><CastleIcon /></a>
                    </p>
                    <h1 className="menu__text-logo">
                        <a href='/'>Прогноз погоды</a>
                    </h1>
                </div>
                <div className='menu__date'>
                    <p className='menu__week-day'>{weekDays[numWeekDay]},</p>
                    <p className='menu__num-day'>{numDay}</p>
                    <p className='menu__month'>{months[numMonth]}</p>
                </div>
                <div className='menu__choose-city-container'>
                    <form className='menu__form'>
                        <label className='menu__input-label' htmlFor="choose-city">
                            <input
                                id='choose-city'
                                className='menu__input'
                                type='text'
                                name='choose-city'
                                placeholder="Cities"
                                value={inputCityName}
                                onChange={({ target }) => setInputCityName(target.value)}
                            />
                        </label>
                        <input
                            className='menu__submit btn'
                            type='submit'
                            value='Поиск'
                            onClick={weatherForecastDataHandler}
                        />
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Menu