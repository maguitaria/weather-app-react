import React, { useState } from "react";
import { useWeatherContext } from "../contexts/TemperatureUnit";
import icons from "../assets";
import "../index.css"
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
    maxTemperature,
    minTemperature,
    icon,
    daylightDuration,
    date,
    feelsLike,
    description,
    windSpeed,
    uv_index,
    precipitation,
    sunrise,
    sunset,
  } = data;
  const dateObjWeek = new Date(date);
  const sunriseDate = new Date(sunrise)
  const sunsetDate = new Date(sunset)

  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(dateObjWeek);

const formatted_sunrise = sunriseDate.toLocaleTimeString("en-Uk", {
  hour: "numeric",
  minute: "numeric",
});
const formatted_sunset = sunsetDate.toLocaleTimeString("en-Uk", {
  hour: "numeric",
  minute: "numeric",
});
      const convertedFeelsLike =
        temperatureUnit === "Celsius"
          ? feelsLike
          : (feelsLike * 9) / 5 + 32; 
  return (
    <div className="flex flex-shrink bg-yellow/30 rounded-md p-4 space-y-4">
      <div className="flex flex-col max-w-md lg:w-full bg-white/30 p-6 rounded-md shadow-lg">
        <h2 className="text-2xl text- text-center font-bold mb-4">
          {dayOfWeek}
        </h2>
        {/* Horizontal line */}
        <div className="w-full h-1 bg-gray-400 my-2 bg-orange"></div>

        {/* Temperature values */}
        <div className="flex justify-between">
          <p className="font-bold">
            {minTemperature.toFixed(1)}&deg;{temperatureUnit.charAt(0)}
          </p>
          <p className="font-bold">
            {maxTemperature.toFixed(1)}&deg;{temperatureUnit.charAt(0)}
          </p>
        </div>
        <p className="mt-2 text-center text-xl font-bold"> {description}</p>
        <p className="text-gray-600 text-center my-2">
          {" "}
          Feels like: {convertedFeelsLike.toFixed(1)}&deg;
          {temperatureUnit.charAt(0)}
        </p>
        <p className="flex items-center my-2">
          <img src={icons.wind} alt="Wind" className="w-10 h-10 mr-2" />
          Wind: {windSpeed} km/h
        </p>
        <p className="flex items-center my-2">
          <img src={icons.uv_index} alt="UV Index" className="w-10 h-10 mr-2" />
          UV Index: {uv_index}
        </p>
        <p className="flex items-center my-2">
          <img
            src={icons.precipitation}
            alt="Precipitation"
            className="w-10 h-10 mr-2"
          />
          Precipitation: {precipitation} mm
        </p>
        <div className="flex items-center my-2">
          <img src={icons.sunrise} alt="Sunrise" className="w-10 h-10 mr-2" />
          Sunrise: {formatted_sunrise}
        </div>
        <div className="flex items-center my-2">
          <img src={icons.sunset} alt="Sunset" className="w-10 h-10 mr-2" />
          Sunset: {formatted_sunset}
        </div>
      </div>

      <div className="max-w-lg"></div>
      <div className="flex justify-items-end lg: ml-36">
        <img
          alt="weather icon"
          src={icon}
          className="  w-full lg:w-full   md:max-w-full sm:max-w-full h-70 mx-auto mb-4"
        />
      </div>
      <button onClick={onClose} className="hover:text-red-700 ml-20 mt-5 h-8">
        <img
          alt="weather icon"
          src={icons.cross}
          className="lg:w-6 lg:h-6 sm:h-10 sm:w-20"
        />
      </button>
    </div>
  );
};

export default WeatherDetailsComponent;
