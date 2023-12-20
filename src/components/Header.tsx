// src/components/Header.tsx
import React, { useContext } from "react";
import { useWeatherContext } from "../contexts/TemperatureUnit";
import Icon from "./WeatherIcon";
import icons from "../assets";
import { LocationContext } from "../contexts/LocationContext";
interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = () => {
  const { temperatureUnit, setTemperatureUnit } = useWeatherContext();
   const { location, getLocation } = useContext(LocationContext);
  const toggleTemperatureUnit = () => {
    const newUnit = temperatureUnit === "Celsius" ? "Fahrenheit" : "Celsius";
    setTemperatureUnit(newUnit);
  };

  return (
    <div className="bg-white/80 rounded-md p-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <h3>{location.town ? location.country : "Weather in " + location.country}</h3>
        </div>
        <div>
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold rounded-full flex items-center space-x-2 p-1"
            onClick={toggleTemperatureUnit}
          >
            {temperatureUnit === "Celsius" ? (
              <Icon iconFile={icons.celsius} width={40} height={40} />
            ) : (
              <Icon iconFile={icons.fahrenheit} width={40} height={40} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
