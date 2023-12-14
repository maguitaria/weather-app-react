// src/components/Header.tsx
import React from "react";
import { useWeatherContext } from "../contexts/TemperatureUnit";
import Icon from "./WeatherIcon";
import icons from "../assets";

const Header: React.FC = () => {
  const { temperatureUnit, setTemperatureUnit } = useWeatherContext();

  const toggleTemperatureUnit = () => {
    const newUnit = temperatureUnit === "Celsius" ? "Fahrenheit" : "Celsius";
    setTemperatureUnit(newUnit);
  };

  return (
    <div className=" bg-slate-400 py-4">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="px-4">
            <p className="text-white capitalize"> Weather App</p>
          </div>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
         onClick={toggleTemperatureUnit}>
 {temperatureUnit === "Celsius" ? (
                <Icon iconFile={icons.celsius} width={50} height={50} />
              ) : (
                <Icon iconFile={icons.fahrenheit}  width={50} height={50} />
              )}
              {temperatureUnit}
</button>
           
          </div>
        </div>
      </div>
  
  );
};

export default Header;
