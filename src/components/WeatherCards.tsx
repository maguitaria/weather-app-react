// src/components/WeatherCardsList.tsx
import React, { useContext, useEffect, useRef, useState } from "react"
import WeatherFlashCard from "./WeatherFlashCard"

import { get7DaysForecast, getCurrentWeather } from "../axios/fetch";
import WeatherDetailsComponent from "./FlashCardDetails";
import { LocationContext } from "../contexts/LocationContext";

const WeatherCardsList: React.FC = () => {
  const [dailyData, setDailyData] = useState(null);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
    const { location, getLocation } = useContext(LocationContext);
    
  useEffect(() => {
    getLocation(); // Get location when component mounts
  }, []);

  
  useEffect(() => {
    if (location.latitude && location.longitude) {
      get7DaysForecast(location.latitude, location.longitude).then((data) => {
        setDailyData(data); // Handle the weather data
      });
    }
  }, [location.latitude, location.longitude]); 

const targetRef = useRef(null);


const handleCardClick = (index) => {
  setSelectedFlashcard(index);
  setIsVisible(true);
  // Scroll to the target component
  if (targetRef.current) {
    targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleCloseClick = () => {
  setIsVisible(false);
};
  return (
    <div ref={targetRef}>
      {/* Conditionally render WeatherDetailsComponent */}
      {isVisible && selectedFlashcard !== null && (
        <WeatherDetailsComponent
          data={dailyData[selectedFlashcard]}
          onClose={handleCloseClick}
        />
      )}
      <div className="p-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 hover:bg-color-100 ml-5">
        {dailyData &&
          dailyData?.map((dayData, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={` ${
                selectedFlashcard === index
                  ? "border-4 border-blue rounded-md"
                  : ""
              }`}
            >
              <WeatherFlashCard
                day={dayData.date}
                description={dayData.description}
                maxTemperature={dayData.maxTemperature}
                minTemperature={dayData.minTemperature}
                icon={dayData.icon}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export  default WeatherCardsList
