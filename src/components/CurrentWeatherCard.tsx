// src/components/CurrentWeatherCard.tsx
import React from "react";

interface CurrentWeatherCardProps {
  temperature: number;
  description: string;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
  temperature,
  description,
}) => {
  return (
    <div className="flex h-96 max-w-md space-y-50">
      
      <div className="w-2/5 bg-white p-4 shadow-md rounded-md h-full">
        <h2 className="text-2xl font-bold mb-2">Current Weather</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-4xl font-bold mt-4">{temperature}&deg;C</p>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
