import PropTypes from 'prop-types';

const CurrentWeather = ({ data }) => {

    const weatherDetails = {
        'Feels like': `${Math.round(data.main.feels_like)}°C`,
        'Wind': `${data.wind.speed} m/s`,
        'Humidity': `${data.main.humidity}%`,
        'Pressure': `${data.main.pressure} hPa`,
    };

    return (
        <div className="weather w-[300px] rounded-md shadow-xl text-white bg-[#333] mx-auto mt-10 px-5 pr-5 pt-0">
            <div className="top flex justify-between items-center">
                <div>
                    <p className="city font-semibold text-[18px] m-0 ">{data.city}</p>
                    <p className="weather-description font-normal text-[14px] m-0">{data.weather[0].description}</p>
                </div>
                <img className="weather-icon w-[100px]" src={`/icons/${data.weather[0].icon}.png`} alt="weather" />
            </div>

            <div className="bottom flex justify-between items-center">
                <p className="temperature font-semibold text-[50px] w-auto my-3 mx-0">{Math.round(data.main.temp)}°C</p>
                <WeatherDetails details={weatherDetails}/>
            </div>
        </div>
    );
};

const WeatherDetails = ({ details }) => {
    return (
        <div className="details w-full pl-5 pb-5">
            <div className="parameter-row flex justify-between">
                <span className="parameter-label border-b mb-2 text-left text-[12px] font-normal">Details</span>
            </div>
            {Object.entries(details).map(([label, value]) => (
                <div className="parameter-row flex justify-between" key={label}>
                    <span className="parameter-label text-left text-[12px] font-normal">{label}</span>
                    <span className="parameter-value text-right font-semibold text-[12px]">{value}</span>
                </div>
            ))}
    </div>
    )
};

CurrentWeather.propTypes = {
    data: PropTypes.shape({
        city: PropTypes.string.isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired
            })
        ).isRequired,
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            feels_like: PropTypes.number.isRequired,
            pressure: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired
        }).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

WeatherDetails.propTypes = {
    details: PropTypes.object
};

export default CurrentWeather;