import React, { useState, useEffect, useContext } from "react";
import { CurrentWeather, getCurrentWeather } from "../axios/fetch";
import icons from "../assets";
import { useWeatherContext } from "../contexts/TemperatureUnit";
import { LocationContext } from "../contexts/LocationContext";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);
  console.log(weatherData)
   const { location, getLocation } = useContext(LocationContext);
  const { temperatureUnit } = useWeatherContext();


  useEffect(() => {
    getLocation(); // Get location when component mounts
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getCurrentWeather(location.latitude, location.longitude).then((data) => {
        setWeatherData(data); // Handle the weather data
      });
    }
  }, [location.latitude, location.longitude]); 
  // useEffect(() => {
  //    getLocation();
  //   const fetchData = async () => {
  //     try {
  //        if (location.latitude && location.longitude) {
  //       const data = await getCurrentWeather(latitude,longitude);
  //       setWeatherData(data);
  //        }
  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Extract numeric temperature value
  const numericTemperature = parseFloat(
    weatherData?.currentWeather.temperature.replace(/[^0-9.-]+/g, "")
  );
  // Convert temperature based on the selected unit
  const convertedTemperature =
    temperatureUnit === "Celsius"
      ? numericTemperature
      : (numericTemperature * 9) / 5 + 32;

  // Extract numeric temperature value
  const numericFeelsLike = parseFloat(
    weatherData?.currentWeather.apparentTemperature.replace(/[^0-9.-]+/g, "")
  );
  // Convert temperature based on the selected unit
  const convertedFeelsLike =
    temperatureUnit === "Celsius"
      ? numericFeelsLike
      : (numericFeelsLike * 9) / 5 + 32;
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Render the weather component
  return (
    <div className="flex h-110 bg-blue/40 rounded-md  md:w-full p-3 space-y-4 lg:w-full">
      <div className="bg-white p-4 shadow-md rounded-md text-center md:w-full w-full">
        <div className=" items-center">
          {/* Wind speed */}
        
            
            <p className=" font-bold text-md text-gray-600 mb-4">
              {location.town ? location.town : location.county}
            </p>
        

        </div>
        {/* Additional details */}

        <p></p>
        {/* Weather icon */}
        <img
          alt="weather icon"
          src={weatherData.currentWeather.icon}
          className="w-20 h-20 mx-auto mb-4"
        />

        {/* Weather description */}
        <p className="text-xl text-gray-600 mb-4">
          {weatherData.currentWeather.description}
        </p>

        {/* Temperature */}
        <div className="flex items-center justify-center mt-4">
          <p className="text-3xl font-bold">
            {convertedTemperature.toFixed(0)}&deg;{temperatureUnit.charAt(0)}
          </p>
        </div>

        {/* Additional details */}
        <div className=" gap-2 mt-4">
          {/* Wind speed */}
          <div className="flex items-center">
            <img
              alt="Wind speed"
              src={icons.windsock}
              className="w-8 h-8 mr-2"
            />
            <p className="text-md text-gray-600">
              Wind speed: {weatherData.currentWeather.windSpeed}
            </p>
          </div>

          {/* Cloud cover */}
          <div className="flex items-center">
            <img alt="Cloudy" src={icons.cloudy} className="w-8 h-8 mr-2" />
            <p className="text-md text-gray-600">
              Cloud Cover: {weatherData.currentWeather.cloudCover}
            </p>
          </div>

          {/* Feels like */}
          <div className="flex items-center">
            <img
              alt="Thermometer"
              src={icons.thermometer}
              className="w-8 h-8 mr-2"
            />
            <p className="text-md text-gray-600">
              Feels like:
              {convertedFeelsLike.toFixed(0)}&deg;
              {temperatureUnit.charAt(0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
