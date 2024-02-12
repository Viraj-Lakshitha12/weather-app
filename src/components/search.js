import {AsyncPaginate} from "react-select-async-paginate"
import {useState} from "react";

export const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }
    const loadOptions = (inputValues) => {

    }

    return (
        <div className="flex mt-10 justify-center">
            <div className="min-w-[70vw] border-4">
                <AsyncPaginate
                    placeholder={'Search for a city'}
                    value={search}
                    onChange={handleOnChange}
                    debounceTimeout={600}
                    loadOptions={loadOptions}
                />
            </div>
        </div>
    )
}
