// src/components/Header.tsx
import React from "react";
import { useWeatherContext } from "../contexts/TemperatureUnit";
import Icon from "./WeatherIcon";
import icons from "../assets";
interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({title}) => {
  const { temperatureUnit, setTemperatureUnit } = useWeatherContext();

  const toggleTemperatureUnit = () => {
    const newUnit = temperatureUnit === "Celsius" ? "Fahrenheit" : "Celsius";
    setTemperatureUnit(newUnit);
  };

  return (
    <div className=" bg-slate-200 p-1">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="px-4">
            <p className="text-white capitalize">{title}</p>
          </div>
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold rounded-full flex items-center space-x-2 p-2"
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
