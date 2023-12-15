// src/contexts/WeatherContext.tsx
import React, { createContext, useContext, useState } from "react";

type TemperatureUnit = "Celsius" | "Fahrenheit";

interface WeatherContextProps {
  temperatureUnit: TemperatureUnit;
  setTemperatureUnit: (unit: TemperatureUnit) => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider: React.FC = ({ children }) => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("Celsius");

  const value: WeatherContextProps = {
    temperatureUnit,
    setTemperatureUnit,
  };

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
