import { Fragment, useEffect, useState } from 'react'
import Card from '../card/Card'
import Menu from './Menu'

const Home = () => {
    let [city, setCity] = useState('Город')
    let [temperature, setTemperature] = useState('Температура')
    let [cloudiness, setCloudiness] = useState('Облачность')
    let [humidity, setHumidity] = useState('Влажность')
    let [wind, setWind] = useState('Ветер')

    // useEffect(() => {
    //     console.log(weatherForecastData)
    // }, [weatherForecastData])
    return (
        <Fragment>
            <Menu
                setCity={setCity}
                setTemperature={setTemperature}
                setCloudiness={setCloudiness}
                setHumidity={setHumidity}
                setWind={setWind}
            />
            <Card
                city={city}
                temperature={temperature}
                cloudiness={cloudiness}
                humidity={humidity}
                wind={wind}
            />
        </Fragment>
    )
}

export default Home