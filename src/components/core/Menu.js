import React, { useEffect, useState } from 'react'
import '../../styles/core/menu.scss'

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

    return (
        <header className='menu'>
            <div className='menu__container'>
                <h1 className="menu__text-logo">
                    <a href='/'>Гиблое дело</a>
                </h1>
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