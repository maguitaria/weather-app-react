// LocationSearchComponent.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { LocationContext } from "../contexts/LocationContext"; // Import your LocationContext

const LocationSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setLocation } = useContext(LocationContext); // Use setLocation from context

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

const selectMostRelevantLocation = (searchResults) => {
  // Example criteria: select the result with the highest importance score
  // and of type 'town' or 'administrative'
  const relevantTypes = new Set(["town", "administrative"]);
  let mostRelevant = null;
  let highestImportance = 0;

  for (const result of searchResults) {
    if (
      relevantTypes.has(result.type) &&
      result.importance > highestImportance
    ) {
      mostRelevant = result;
      highestImportance = result.importance;
    }
  }

  return mostRelevant;
};

  const handleSearchSubmit = async () => {
    try {
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${searchTerm}`
      );
      const results = response.data;
      const mostRelevantLocation = selectMostRelevantLocation(results);
      if (mostRelevantLocation) {
        const { lat, lon, display_name } = mostRelevantLocation;
        console.log(mostRelevantLocation)
      
   
        const parts = display_name.split(", ");

        const town = parts[0]; // Assuming the first part is always the town
        const country = parts[parts.length - 1]; // Assuming the last part is always the country
        // The county might be more variable. In this case, it seems like the third part might be the county.
        const county = parts[2];
const formattedLocation = `${town}, ${county}, ${country}`;
        setLocation({
          latitude: lat,
          longitude: lon,
          town: formattedLocation,
          county: county,
          country: country
        });
      } else {
        console.log("Location not found.");
      }
    } catch (error) {
      console.error("Error during location search:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter town name"
      />
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
};

export default LocationSearchComponent;
