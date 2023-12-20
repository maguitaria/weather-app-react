// LocationContext.js
import React, { createContext, useState } from "react";
import axios from "axios";

interface LocationContextProps {
  location: Location;
  setLocation: (unit: Location) => void;
  getLocation: (unit : Location) => void;
}
export const LocationContext = createContext<LocationContextProps | undefined>(null);

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    town: "",
    county: "",
    country: ""
  });
  const [error, setError] = useState("");

  const handleLocationSuccess = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLocation({ latitude, longitude });
    await getTownName(latitude, longitude);
  };

  const handleLocationError = (error) => {
    setError(error.message);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError
      );
    }
  };

  const getTownName = async (latitude :GeolocationPosition, longitude: GeolocationPosition) => {
    const url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

    try {
      const response = await axios.get(url);
      const result = response.data;
      const townName = result.address.town;
      const countyName = result.address.county;
      const countryName = result.address.country;
      if (result && result.address && result.address.town) {
        
        setLocation((prevState) => ({ ...prevState, town: townName, county:countyName, country: countryName }));
      } else {
        console.log("No town found for these coordinates.");
        console.log( location)
        setLocation((prevState) => ({
          ...prevState,
          county: countyName,
          country: countryName,
        }));
      }
    } catch (error) {
      console.error("Error during reverse geocoding:", error);
    }
  };

  return (
    <LocationContext.Provider value={{ location, error, getLocation , setLocation}}>
      {children}
    </LocationContext.Provider>
  );
};
