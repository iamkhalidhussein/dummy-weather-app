import PropTypes from 'prop-types';


const CurrentWeather = ({data}) => {
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
                <div className="details w-full pl-5 pb-5">
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label border-b mb-2 text-left text-[12px] font-normal">Details</span>
                    </div>
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label text-left text-[12px] font-normal">Feels like</span>
                        <span className="parameter-value text-right font-semibold text-[12px]">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label text-left text-[12px] font-normal">Wind</span>
                        <span className="parameter-value text-right font-semibold text-[12px]">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label text-left text-[12px] font-normal">Humidity</span>
                        <span className="parameter-value text-right font-semibold text-[12px]">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-pressure flex justify-between">
                        <span className="parameter-label text-left text-[12px] font-normal">Pressure</span>
                        <span className="parameter-value text-right font-semibold text-[12px]">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
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

export default CurrentWeather;