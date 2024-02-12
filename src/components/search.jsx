import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { options, GEO_API_URL } from "/api"; // Update the import path accordingly

export const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    };
    return (
        <div className="flex mt-10 justify-center">
            <div className="min-w-[70vw] border-4">
                <AsyncPaginate
                    placeholder={'Search for a city'}
                    value={search}
                    onChange={handleOnChange}
                    debounceTimeout={1000}
                    loadOptions={loadOptions}
                />
            </div>
        </div>
    );
};
