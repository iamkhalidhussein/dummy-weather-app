import PropTypes from 'prop-types';

import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion';

const WEEK_DAYS = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDate();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    console.log(forecastDays)
    return (
        <div>
            <label className="title text-[23px] font-bold">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item bg-[#F5F5F5] rounded-2xl mb-5 flex gap-1 items-center text-[14px] py-3 pl-4 h-20'>
                                    <img className='icon-small w-10' src={`/icons/${item.weather[0].icon}.png`} alt="wather" />
                                    <label className='day text-[#212121] font-semibold flex-1 text-[16px]'>{forecastDays[idx]}</label>
                                    <label className='description flex-1 text-right font-medium pr-3'>{item.weather[0].description}</label>
                                    <label className='min-max text-[#757575] pr-4'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid grid grid-cols-2 gap-2 py-2 px-5  grid-rows-3'>
                                <div className='daily-details-grid-item flex items-center h-7'>
                                    <label className='text-[#757575]'>Pressure: </label>
                                    <label className='text-[#212121] text-base font-semibold'>{item.main.pressure}hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='text-[#757575]'>Humidity: </label>
                                    <label className='text-[#212121] text-base font-semibold'>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='text-[#757575]'>Clouds: </label>
                                    <label className='text-[#212121] text-base font-semibold'>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='text-[#757575]'>Wind Speed: </label>
                                    <label className='text-[#212121] text-base font-semibold'>{item.wind.speed}m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='text-[#757575]'>Sea Level: </label>
                                    <label className='text-[#212121] text-base font-semibold'>{item.main.sea_level}m</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label className='text-[#757575]'>Feels like: </label>
                                    <label className='text-[#212121] text-base font-semibold'>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};


Forecast.propTypes = {
    data: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.shape({
            weather: PropTypes.arrayOf(PropTypes.shape({
                icon: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })).isRequired,
            main: PropTypes.shape({
                temp_min: PropTypes.number.isRequired,
                temp_max: PropTypes.number.isRequired,
                pressure: PropTypes.number.isRequired,
                humidity: PropTypes.number.isRequired,
                sea_level: PropTypes.number.isRequired,
                feels_like: PropTypes.number.isRequired,
            }).isRequired,
            clouds: PropTypes.shape({
                all: PropTypes.number.isRequired,
            }).isRequired,
            wind: PropTypes.shape({
                speed: PropTypes.number.isRequired,
            }).isRequired,
        })).isRequired,
    }).isRequired,
};

export default Forecast;
