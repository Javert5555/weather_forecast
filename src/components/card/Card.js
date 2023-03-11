import '../../styles/card/card.scss'
import TodayWeatherCity from './TodayWeatherCity'
import TodayWeatherData from './TodayWeatherData'

const Card = () => {
    return (
        <div className='card'>
            <div className='card__upper-part'>
                <TodayWeatherData />
                <TodayWeatherCity />
            </div>
            <div className='card__bottom-part'></div>
            <div></div>
        </div>
    )
}

export default Card