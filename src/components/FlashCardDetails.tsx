import React, { useState } from "react";
import { useWeatherContext } from "../contexts/TemperatureUnit";

interface WeatherFlashCardProps {
  maxTemperature: number;
  minTemperature: number;
  icon: string;
  description: string;
  data: any;
  onClose: any;
}

const WeatherDetailsComponent: React.FC<WeatherFlashCardProps> = ({
  data,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const { temperatureUnit } = useWeatherContext();

  if (!data || !isVisible) {
    // If data is undefined, null, or the component is set to be hidden, don't render anything
    return null;
  }

  const {
    location,
    maxTemperature,
    minTemperature,
    icon,
    feelsLike,
    description,
    windDirection,
    windSpeed,
    gustSpeed,
    precipitation,
    humidity,
    pressure,
    sunrise,
    sunset,
  } = data;

  // Convert temperature based on the selected unit
  const convertedMaxTemperature =
    temperatureUnit === "Celsius"
      ? maxTemperature
      : (maxTemperature * 9) / 5 + 32;

  const convertedMinTemperature =
    temperatureUnit === "Celsius"
      ? minTemperature
      : (minTemperature * 9) / 5 + 32;

  return (
    <div className="flex flex-shrink bg-yellow/30 rounded-md p-4 space-y-4">
      <button onClick={onClose} className="text-red-500 hover:text-red-700">
        Close
      </button>
      <div className="flex flex-col p-5 max-w-md lg:w-full bg-white/30">
        <h2 className="text-lg font-bold mb-4">{data.date}</h2>
        <p className="lg:text-xl font-bold mt-4">
          Max: {convertedMaxTemperature.toFixed(1)}&deg;
          {temperatureUnit.charAt(0)}
        </p>
        <p className="text-xl font-bold mt-2">
          Min: {convertedMinTemperature.toFixed(1)}&deg;
          {temperatureUnit.charAt(0)}
        </p>
        <p>Feels like: {feelsLike}°C</p>
        <p className="text-gray-600">{description}</p>
        <p>
          Wind: {windDirection} {windSpeed} m/s
        </p>
        <p>Gust: {gustSpeed} m/s</p>
        <p>Precipitation: {precipitation} mm</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>

      <div className="max-w-lg"></div>
      <div className="flex justify-end">
        <img
          alt="weather icon"
          src={icon}
          className=" lg:w-full w-60 h-70 mx-auto mb-4"
        />
      </div>
      
    </div>
  );
};

export default WeatherDetailsComponent;
