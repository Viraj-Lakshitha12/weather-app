import './app.css'
import { Search } from "./components/search.jsx";
import {Weather} from "./components/weather.jsx";
import {weatherApi_URL,options} from "./api/weatherApi.js";

export function App() {
    const handleOnSearchData = async (searchData) => {
        let [lat, lot] = searchData.value.split(' ');
        try {
            const response = await fetch(`${weatherApi_URL}/${lat}/${lot}`, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Search onSearchChange={handleOnSearchData} />
            <Weather/>
        </div>
    )
}
