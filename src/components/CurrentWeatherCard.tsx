// src/components/CurrentWeatherCard.tsx
import React from "react";
import icons from "../assets/index";

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
  wind
}) => {
  return (
    <div className="flex h-96 max-w-md space-y-50 w-full">
      <div className="w-2/5 bg-white p-4 shadow-md rounded-md h-full w-full">
        <h3 className="text-xl font-bold mb-2">Current Weather</h3>
        
         <img
          alt="cloudy"
          src={icons.cloudy}
          style={{ width: '200px', height: '300px' }} // Adjust the width and height as needed
        />
        <p className="text-gray-600">{description}</p>
         <div className="flex items-center">
         <p className="text-4xl font-bold mt-4" style={{ fontSize: '40px' }}>
          {temperature} 
        </p>
        <img
          alt="Wind speed"
          src={icons.celsius}
          style={{ width: '60px', height: '80px' }}
        />
        </div>
       <p className="text-gray-600">{date}</p>
       <div className="flex items-center">
         <img
          alt="Wind speed"
          src={icons.windsock}
          style={{ width: '70px', height: '100px' }} // Adjust the width and height as needed
        />
        <p className="text-gray-600">Wind speed: {wind} m/s</p>  
        </div> 
      
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
