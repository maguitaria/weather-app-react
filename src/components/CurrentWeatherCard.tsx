// src/components/CurrentWeatherCard.tsx
import React from "react";
import icons from "../assets/index";
import { useWeatherContext } from "../contexts/TemperatureUnit";

interface CurrentWeatherCardProps {
  temperature: number;
  description: string;
  date: string;
  wind: number;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
  temperature,
  description,
  date,
  wind,
}) => {
  const { temperatureUnit } = useWeatherContext();

  // Convert temperature based on the selected unit
  const convertedTemperature =
    temperatureUnit === "Celsius" ? temperature : (temperature * 9) / 5 + 32;

  return (
    <div className="flex h-96 max-w-md space-y-4 w-full">
      <div className="bg-white p-4 shadow-md rounded-md text-center w-full">
        <h3 className="text-xl font-bold mb-2 text-center">Current Weather</h3>
        <img
          alt="cloudy"
          src={icons.cloudy}
          className="w-32 h-32 mx-auto mb-4"
        />
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center justify-center mt-4">
          <p className="text-xl font-bold mt-4">
            {convertedTemperature.toFixed(1)}&deg;{temperatureUnit.charAt(0)}
          </p>
        </div>
        <p className="text-gray-600">{date}</p>
        <div className="flex items-center mt-4">
          <img
            alt="Wind speed"
            src={icons.windsock}
            className="w-10 h-10 mr-2"
          />
          <p className="text-gray-600">Wind speed: {wind} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
