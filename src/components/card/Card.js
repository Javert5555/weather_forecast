import '../../styles/card/card.scss'
import DayWeather from './DayWeatherInfo'
import TodayWeatherCity from './TodayWeatherCity'
import TodayWeatherData from './TodayWeatherData'

const Card = () => {

    const weekDays = [
        'ВСК',
        'ПОН',
        'ВТН',
        'СРД',
        'ЧТВ',
        'ПТН',
        'СУБ'
    ]

    return (
        <section className='container'>
            <div className='card'>
                <div className='card__upper-part'>
                    <TodayWeatherData />
                    <TodayWeatherCity />
                </div>
                <div className='card__bottom-part'>
                    {weekDays.map((weekDay, index) => (
                        <DayWeather
                            key={`weekDay-${index}`}
                            info = {weekDay}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Card