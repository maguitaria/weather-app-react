import React, { useState, useEffect } from "react";
import { CurrentWeather, getCurrentWeather } from "../axios/fetch";
import icons from "../assets";
import { useWeatherContext } from "../contexts/TemperatureUnit";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);
  const { temperatureUnit } = useWeatherContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentWeather();
        setWeatherData(data);
        console.log("Current weather", data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  // Extract numeric temperature value
  const numericTemperature = parseFloat(
    weatherData?.currentWeather.temperature.replace(/[^0-9.-]+/g, "")
  );
  // Convert temperature based on the selected unit
  const convertedTemperature =
    temperatureUnit === "Celsius"
      ? numericTemperature
      : (numericTemperature * 9) / 5 + 32;
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Render the weather component
  return (
    <div className="flex h-96 bg-white rounded-md max-w-md space-y-4 w-full">
      <div className="bg-white p-4 shadow-md rounded-md text-center w-full">
        <h3 className="text-xl font-bold mb-2 text-center">Current Weather</h3>
        <img
          alt="weather icon"
          src={weatherData.currentWeather.icon}
          className="w-32 h-32 mx-auto mb-4"
        />
        <p className="text-gray-600">
          {weatherData.currentWeather.description}
        </p>
        <div className="flex items-center justify-center mt-4">
          <p className="text-xl font-bold mt-4">
            {convertedTemperature.toFixed(1)}&deg;{temperatureUnit.charAt(0)}
          </p>
        </div>
        <p className="text-gray-600">{weatherData.currentWeather.date}</p>
        <div className="flex items-center mt-4">
          <img
            alt="Wind speed"
            src={icons.windsock}
            className="w-10 h-10 mr-2"
          />
          <p className="text-gray-600">
            Wind speed: {weatherData.currentWeather.windSpeed}
          </p>
        </div>
        <p className="text-gray-600">
          Cloud Cover: {weatherData.currentWeather.cloudCover}
        </p>
      </div>
    </div>
  );
};

export default WeatherComponent;
