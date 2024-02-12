import './app.css'
import {Search} from "./components/search.jsx";
import {Weather} from "./components/weather.jsx";
import {weatherApi_URL, options} from "./api/weatherApi.js";
import {forecast_url, forecastOptions} from "./api/forecastApi.js";
import {useState} from "react";

export function App() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const handleOnSearchData = async (searchData) => {
        let [lat, lot] = searchData.value.split(' ');
        try {
            const response = await fetch(`${weatherApi_URL}/${lat}/${lot}`, options);
            const result = await response.json();
            setWeather({city: searchData.label, ...result});
        } catch (error) {
            console.error(error);
        }

        try {
            const response = await fetch(`${forecast_url}/${lat}/${lot}`, forecastOptions);
            const result = await response.json();
            setForecast(result)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Search onSearchChange={handleOnSearchData}/>
            {weather && <Weather data={weather}/>}
        </div>
    )
}
