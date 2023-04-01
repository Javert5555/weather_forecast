import '../../styles/card/card.scss'
import DayWeather from './DayWeatherInfo'
import TodayWeatherCity from './TodayWeatherCity'
import TodayWeatherData from './TodayWeatherData'

const Card = ({ city, temperature, cloudiness, humidity, wind }) => {

    const weekDays = [
        'ПОН',
        'ВТН',
        'СРД',
        'ЧТВ',
        'ПТН',
        'СУБ',
        'ВСК'
    ]

    return (
        <section className='container'>
            <div className='card'>
                <div className='card__upper-part'>
                    <TodayWeatherData
                        temperature={temperature}
                        cloudiness={cloudiness}
                        humidity={humidity}
                        wind={wind}
                    />
                    <TodayWeatherCity
                        city={city}
                    />
                </div>
                <div className='card__bottom-part'>
                    {weekDays.map((weekDay, index) => (
                        <DayWeather
                            key={`weekDay-${index}`}
                            dayTitle = {weekDay}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Card