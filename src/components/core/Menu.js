import React, { useEffect, useState } from 'react'
import '../../styles/core/menu.scss'
import CastleIcon from '@mui/icons-material/Castle';

const Menu = () => {
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

    useEffect(() => {
        const getDateEverySecond = setInterval(() => {
            let timeNow = new Date()
            setNumDay(timeNow.getDate())
            setNumWeekDay(timeNow.getDay())
            setNumMonth(timeNow.getMonth())
        }, 1000)
        return () => clearInterval(getDateEverySecond)
    }, [])

    console.log('render')
    
    return (
        <header className='menu'>
            <div className='menu__container'>
                <div style={{ display: 'flex'}}>
                    <p className="menu__text-logo-name" style={{}}>
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
            </div>
        </header>
    )
}

export default Menu