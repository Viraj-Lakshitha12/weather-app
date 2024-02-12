import './app.css'
import { Search } from "./components/search.jsx";
import {Weather} from "./components/weather.jsx";

export function App() {
    const handleOnSearchData = (searchData) => {
        console.log(searchData);
    }

    return (
        <div>
            <Search onSearchChange={handleOnSearchData} />
            <Weather/>
        </div>
    )
}
