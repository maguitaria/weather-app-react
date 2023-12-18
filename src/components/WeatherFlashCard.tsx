import React from "react";
import { useWeatherContext } from "../contexts/TemperatureUnit";

interface WeatherFlashCardProps {
  day: string;
  maxTemperature: number;
  minTemperature: number;
  icon: string; 
  description: string;
}

const WeatherFlashCard: React.FC<WeatherFlashCardProps> = ({
  day,
  maxTemperature,
  minTemperature,
  icon,
  description,
}) => {
  const { temperatureUnit } = useWeatherContext();

  const dateObjWeek = new Date(day);


  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(dateObjWeek);


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
    <div className="bg-light-blue p-4 shadow-md rounded-md ">
      <h2 className="text-lg  text-center font-bold mb-2">{dayOfWeek}</h2>
      <img
        alt="weather icon"
        src={icon}
        className="w-40 h-40 mx-auto mb-4"
      />
      <p className="text-gray-600">{description}</p>
      <p className="text-xl font-bold mt-4">
        Max: {convertedMaxTemperature.toFixed(1)}&deg;
        {temperatureUnit.charAt(0)}
      </p>
      <p className="text-xl font-bold mt-2">
        Min: {convertedMinTemperature.toFixed(1)}&deg;
        {temperatureUnit.charAt(0)}
      </p>
    </div>
  );
};

export default WeatherFlashCard;
