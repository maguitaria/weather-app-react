import axios from "axios";

export interface WeatherData {
    labels: string[]; 
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        pointBorderColor: string;
        borderColor: string;
    }[];
}

export async function getTempAndDay(): Promise<WeatherData> {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.47&hourly=temperature_2m"
        );

        const data = response.data;
        console.log("Data from response ", data);
        if (!data.hourly || !data.hourly.time || !data.hourly.temperature_2m) {
            console.error("Invalid data structure:", data);
            // Handle the error as needed
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
                    borderColor: "rgba(75,192,192,1)",
                },
            ],
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
