import React, { useContext, useEffect, useState } from "react";
import { useWeatherContext } from "../contexts/TemperatureUnit";
import icons from "../assets";
import "../index.css"
import { LocationContext } from "../contexts/LocationContext";
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
   const { location, getLocation } = useContext(LocationContext);
  if (!data || !isVisible) {
    // If data is undefined, null, or the component is set to be hidden, don't render anything
    return null;
  }
 useEffect(() => {
   getLocation(); // Get location when component mounts
 }, []);
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
  const sunriseDate = new Date(sunrise);
  const sunsetDate = new Date(sunset);
  let displayText; // Today or day of week
  let displayDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(dateObjWeek);

  // Display today or then day of week
  const today = new Date();

  if (
    dateObjWeek.getFullYear() === today.getFullYear() &&
    dateObjWeek.getMonth() === today.getMonth() &&
    dateObjWeek.getDate() === today.getDate()
  ) {
    // If they are equal, set displayText to "today"
    displayText = "Today";
  } else {
    // If they are not equal, format dateObjWeek as the weekday name
    displayText = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(dateObjWeek);
  }

  const formatted_sunrise = sunriseDate.toLocaleTimeString("en-Uk", {
    hour: "numeric",
    minute: "numeric",
  });
  const formatted_sunset = sunsetDate.toLocaleTimeString("en-Uk", {
    hour: "numeric",
    minute: "numeric",
  });
  const convertedFeelsLike =
    temperatureUnit === "Celsius" ? feelsLike : (feelsLike * 9) / 5 + 32;
  return (
    <div className="flex flex-1 lg:w-full sm:w-full bg-yellow/30 rounded-md p-2 ">
      <div className="bg-white p-4 shadow-md rounded-md  w-full">
        <div className="">
          <button
            onClick={onClose}
            className="w-auto lg:ml-4 xs:w-8 sm:h-8 xs:h-8 small-cross"
          >
            <img
              alt="weather icon"
              src={icons.cross}
              className=" h-6 w-6 small-cross"
   
            />
          </button>
          <img
            alt="weather icon"
            src={icon}
            className="w-auto lg:w-full md:max-w-full sm:h-48 mx-auto mb-4"
          />
        </div>
        <h2 className="text-2xl text- text-center font-bold mb-4">
          {displayText}
        </h2>
        <p className="lg:text-lg sm:text-xs md:text-md text-center font-bold mb-2">
          {" "}
          {displayDate}
        </p>
        <br />
        {/* Horizontal line */}
        <div className="w-full h-2 rounded-md bg-gray-400 my-2 bg-gray/40"></div>

        {/* Temperature values */}
        <div className="flex justify-between">
          <p className="font-bold text-lg text-blue">
            {minTemperature.toFixed(0)}&deg;{temperatureUnit.charAt(0)}
          </p>
          <p className="font-bold text-lg text-red">
            {maxTemperature.toFixed(0)}&deg;{temperatureUnit.charAt(0)}
          </p>
        </div>
        <p className="mt-2 text-center text-xl font-bold"> {description}</p>
        <p className="text-gray-600 text-center text-lg xl:text-xl my-2">
          {" "}
          Feels like: {convertedFeelsLike.toFixed(1)}&deg;
          {temperatureUnit.charAt(0)}
        </p>
        <p className="flex items-center  text-lg xl:text-xl  my-2">
          <img src={icons.wind} alt="Wind" className="w-10 h-10 mr-2" />
          Wind: {windSpeed} km/h
        </p>
        <p className="flex items-center  text-lg xl:text-xl my-2">
          <img src={icons.uv_index} alt="UV Index" className="w-10 h-10 mr-2" />
          UV Index: {uv_index}
        </p>

        <p className="flex items-center  text-lg xl:text-xl my-2">
          <img
            src={icons.precipitation}
            alt="Precipitation"
            className="w-10 h-10 mr-2"
          />
          Precipitation: {precipitation} mm
        </p>
        <div className="flex items-center  text-lg xl:text-xl my-2">
          <img src={icons.sunrise} alt="Sunrise" className="w-10 h-10 mr-2" />
          Sunrise: {formatted_sunrise}
        </div>
        <div className="flex items-center  text-lg xl:text-xl my-2">
          <img src={icons.sunset} alt="Sunset" className="w-10 h-10 mr-2" />
          Sunset: {formatted_sunset}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetailsComponent;
