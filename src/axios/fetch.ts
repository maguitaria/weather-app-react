import axios from "axios";
import weatherCode_JSON from "./WMO_code";

export interface WeatherData {
    labels: string[]; 
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        pointBorderColor: string;
        borderColor: string;
        lineTension? : number // how smooth the lines are displayed
    }[];
}

export interface CurrentWeather {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        pointBorderColor: string;
        borderColor: string;
        lineTension?: number // how smooth the lines are displayed
    }[];
    currentWeather : {
        description: string,
        icon: string ,
        temperature: any,
        date: string ,
        windSpeed: string,
        cloudCover: string,
        apparentTemperature: any
    }
}

export async function getWeeklyData(): Promise<WeatherData> {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.47&hourly=temperature_2m"
        );

        const data = response.data;
        if (!data.hourly || !data.hourly.time || !data.hourly.temperature_2m) {
            console.error("Invalid data structure:", data);

            return;
        }


        const hourly = data.hourly;       

        const timeLabels: string[] = hourly.time;
        const temperatureData: number[] = hourly.temperature_2m;

        return {
            labels: timeLabels,
            datasets: [
                {
                    label: "Temperature",
                    data: temperatureData,
                    fill: false,
                    pointBorderColor: 'aqua',
                    borderColor: "",
                    lineTension: 1,
                },
            ],
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}


export async function getCurrentWeather(): Promise<CurrentWeather> {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=65.0124&longitude=25.4682&current=temperature_2m,weather_code,cloud_cover,wind_speed_10m,apparent_temperature&hourly=temperature_2m&daily=weather_code&timezone=auto&forecast_days=1`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const weatherData = await response.json();
        if (!weatherData) {
            throw new Error;
        }

// Data for graph
        const hourly = weatherData.hourly;
        const timeLabels: string[] = hourly.time;
        const temperatureData: number[] = hourly.temperature_2m;
// Data for current weather
        // Extract necessary information from the weather data
        const currentTemperature = weatherData.current.temperature_2m.toFixed(1);
        const cloudCover = weatherData.current.cloud_cover;
        const temperatureUnit = 'C'; // Assuming the temperature is in Celsius
        const date = weatherData.current.time;
        const wind = weatherData.current.wind_speed_10m; 
        const apparentTemperature = weatherData.current.apparent_temperature
        // Extract weather code from the weather data
        const weatherCode = weatherData.daily.weather_code;

    

        // Use the weather code to get the corresponding weather information
        const weatherCodeInfo = weatherCode_JSON[weatherCode];

        return {
            labels: timeLabels,
            datasets: [
                {
                    label: "Temperature today",
                    data: temperatureData,
                    fill: false,
                    pointBorderColor: 'aqua',
                    borderColor: "",
                    lineTension: 1,
                },
            ],
            currentWeather: {
                description: weatherCodeInfo.day.description,
                icon: weatherCodeInfo.day.image, //TODO - add night images
                temperature: `${currentTemperature}&deg;${temperatureUnit}`,
                date: date,
                windSpeed: `${wind} m/s`,
                cloudCover: `${cloudCover} %`,
                apparentTemperature: `${apparentTemperature}&deg;${temperatureUnit}`
            }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

const get7days_URL = 'https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.4682&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max'
export async function get7DaysForecast() {

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=65.0124&longitude=25.4682&current=temperature_2m,weather_code,cloud_cover&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,daylight_duration,wind_speed_10m_max,precipitation_sum&timezone=auto`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const weatherData = await response.json();

    // Ensure all necessary arrays are present in the data
    if (!weatherData.daily || !weatherData.daily.time || !weatherData.daily.temperature_2m_max || !weatherData.daily.temperature_2m_min || !weatherData.daily.weather_code) {
        throw new Error("Incomplete weather data");
    }

    const dailyInfo = weatherData.daily.time.map((day, index) => {
        return {
            date: day,
            maxTemperature: weatherData.daily.temperature_2m_max[index],
            minTemperature: weatherData.daily.temperature_2m_min[index],
            weatherCode: weatherData.daily.weather_code[index],
            description: weatherCode_JSON[weatherData.daily.weather_code[index]]?.day?.description || "", // Adjust based on the actual structure of your API response
            icon: weatherCode_JSON[weatherData.daily.weather_code[index]]?.day?.image || "", // Adjust based on the actual structure of your API response
            
            // Additional info
            feelsLike: weatherData.daily.apparent_temperature_max[index],
            sunrise: weatherData.daily.sunrise[index],
            sunset: weatherData.daily.sunset[index],
            uv_index : weatherData.daily.uv_index_max[index],
            daylightDuration : weatherData.daily.daylight_duration[index],
            windSpeed: weatherData.daily.wind_speed_10m_max[index],
            precipitation: weatherData.daily.precipitation_sum[index],
        };
    });

    return dailyInfo;
}

