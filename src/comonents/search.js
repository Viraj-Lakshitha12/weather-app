import {AsyncPaginate} from "react-select-async-paginate"
import {useState} from "react";

export const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    function handleOnChange(searchData) {
        setSearch(searchData);
        onSearchChange(searchData)
    }

    return (
        <div class={'mt-1'}>
            <AsyncPaginate
                placeholder={'search for city'}
                value={search}
                onChange={handleOnChange}
                debounceTimeout={600}
            ></AsyncPaginate>
        </div>
    )
}
