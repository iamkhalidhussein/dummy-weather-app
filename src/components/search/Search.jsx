import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import PropTypes from 'prop-types';
import useCitySearch from '@/hooks/useCitySearch.js';

export const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const { loadOptions } = useCitySearch()

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

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

Search.propTypes = {
    onSearchChange: PropTypes.func
};