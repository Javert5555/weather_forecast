import { Fragment, useEffect, useState } from 'react'
import Card from '../card/Card'
import Menu from './Menu'

const Home = () => {
    let [city, setCity] = useState('City')
    let [temperature, setTemperature] = useState('temperature')
    let [cloudiness, setCloudiness] = useState('cloudiness')
    let [humidity, setHumidity] = useState('humidity')
    let [wind, setWind] = useState('wind')

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