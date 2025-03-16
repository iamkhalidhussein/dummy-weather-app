# Weather App

## Description
Weather App is a simple and intuitive application that provides current weather information and forecasts based on user input. Users can search for any city to retrieve real-time weather data, including temperature, humidity, wind speed, and more.

## Features
- Current weather data retrieval
- 5-day weather forecast
- User-friendly interface
- Responsive design

## Technologies Used
- React.js
- JavaScript (ES6+)
- CSS (Tailwind CSS)
- OpenWeatherMap API

## Folder Structure

```js
📦 weather-app
├── 📂 public         # Static assets (favicons, images, etc.)
├── 📂 src            # Main source code
│   ├── 📂 components  # Reusable UI components (search, forecast, etc.)
│   ├── 📂 apis        # Open weather apis
│   ├── 📂 hooks       # Layout of the application
│   ├── App.tsx       # Entry point
│   ├── main.tsx      # Main application component
├── 📜 package.json    # Project dependencies and scripts
├── 📜 README.md       # Project documentation
├── 📜 tsconfig.json   # TypeScript configuration
└── 📜 .gitignore      # Files to ignore in Git
```

## Installation

```js
1. Clone the repository:
git clone https://github.com/iamkhalidhussein/dummy-weather-app


2. Navigate to the project directory:
cd ./dummy-weather-app


3. Install the dependencies:
pnpm install

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

VITE_GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';  
VITE_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
VTIE_WEATHER_API_KEY = "840250e9429a7c759828d872aafcfab6";


5. Start the development server:
pnpm dev
```

## Usage

```js
1. Open your browser and go to `http://localhost:5173`.
2. Enter the name of a city in the search bar.
3. Click on the search button to retrieve the current weather and forecast data.
4. View detailed weather information displayed in a user-friendly format.
```
## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

```js
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
git checkout -b feature/YourFeatureName

3. Make your changes and commit them:
git commit -m "Add some feature"

4. Push to the branch:
git push origin feature/YourFeatureName

5. Open a pull request.
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [React](https://reactjs.org/) for its powerful library for building user interfaces.
