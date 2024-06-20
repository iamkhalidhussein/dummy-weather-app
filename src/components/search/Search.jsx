import { useState } from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from './api';


const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        console.log(inputValue)
        return await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        .then((responce) => responce.json())
        .then((responce) => {
            return {
                options: responce.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            }
            // console.log(responce)
        })
        .catch((err) => console.error(err))
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <div>
            <AsyncPaginate
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    );
};

export default Search;
