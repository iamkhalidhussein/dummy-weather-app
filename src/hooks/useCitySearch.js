import { GEO_API_URL, geoApiOptions } from '@/components/search/api.js';

const useCitySearch = () => {
    const loadOptions = async (inputValue) => {
        try {
            const responce = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);
            const data = await responce.json();
            
            return {
                options: data.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            };
        } catch (error) {
            console.error('error while fetching data', error);
            return { options: [] };
        }
    }
    return { loadOptions }
};

export default useCitySearch;