// src/components/WeatherCardsList.tsx
import React, { useEffect, useState } from "react"
import WeatherFlashCard from "./WeatherFlashCard"
import { sampleWeatherData } from "../axios/sampleData"
import { get7DaysForecast } from "../axios/fetch";
import WeatherDetailsComponent from "./FlashCardDetails";

const WeatherCardsList: React.FC = () => {
  const [dailyData, setDailyData] = useState(null);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get7DaysForecast();
        setDailyData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);


const handleCardClick = (index) => {
  setSelectedFlashcard(index);
  setIsVisible(true);

};

const handleCloseClick = () => {
  setIsVisible(false);
};
  return (
    <div>
      {/* Conditionally render WeatherDetailsComponent */}
      {isVisible && selectedFlashcard !== null && (
        <WeatherDetailsComponent
          data={dailyData[selectedFlashcard]}
          onClose={handleCloseClick}
        />
      )}
    <div className="p-4" />
        <div className="  flex grid grid-cols-4 gap-4 hover:bg-color-100 ml-5">
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
