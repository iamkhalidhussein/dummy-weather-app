import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/search/Search"
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/search/api";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null); 
  const [currentForecast, setCurrentForecast] = useState(null); 

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setCurrentForecast({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  }

  console.log(currentWeather)
  console.log(currentForecast)

  return (
    <>
      <div className="max-w-[1080px] my-5 mx-auto">
          <Search onSearchChange={handleOnSearchChange}></Search>
          {currentWeather && <CurrentWeather data={currentWeather}></CurrentWeather>}
          {currentForecast && <Forecast data={currentForecast}></Forecast>}
      </div>
    </>
  )
}

export default App
