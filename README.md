# 🌦️ Weather App

The Weather App provides you with the latest weather information for Oulu, including a 7-day forecast, current conditions, and an hourly chart to visualize the week's weather changes.

 It uses the Open Meteo API for data, Chart.js for charts, and is built with Vite, React, TypeScript, Axios, and date-fns.
 
<img width="1435" alt="Screenshot 2023-12-19 at 15 07 04" src="https://github.com/maguitaria/weather-app-react/assets/112544437/349e15ba-f694-4fab-8e96-ce7428fdea12">

## 🌐 Deployment

The Weather App is deployed at [https://maguitaria.github.io/weather-app-react/](https://maguitaria.github.io/weather-app-react/). Enjoy!)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and access the app at [http://localhost:3000](http://localhost:3000).

## 🌟 Features

- **7-Day Forecast:** Get a detailed 7-day weather forecast for Oulu, including temperature, descriptions, and more.

- **Current Weather:** View current conditions in Oulu, including temperature, humidity, and wind speed.

- **Hourly Chart:** Visualize hourly weather changes throughout the week with an interactive chart.

- **Responsive Design:** Enjoy a seamless user experience on all devices, from desktop to mobile.


## 🛠️ Technologies Used

- **Vite** for a fast and modern development experience.
- **React** for building user interfaces.
- **Chart.js** for creating interactive weather charts.
- **date-fns** for date and time formatting.
- **TypeScript** for enhanced code quality.
- **Axios** for making API requests.

### 📝 Testing
E2E Tests with Playwright.
As project has only one main page, I decided to go with full e2e testing.

The Weather App has integration tests using Playwright. To run the tests, follow these steps:

####    Make sure your development server is running:
```
   bash

npm start
```
To fire the UI testing and additional features:
```
//Run with UI demontstration
npx playwright test --ui 
// After test show the report
npx playwright show-report
// To generate tests
npx playwright codegen

```
Open a new terminal window and run the integration tests:
```    npm test```
 
I reccomend using deployed version to ensure that testing runs smoothly.


Playwright will launch a browser and perform automated tests to ensure the app functions correctly.

### Recommendation for testing
**Playwright tests are in GitHub actions, with deployment URL.**

  It's recommended to use the deployed version of the Weather App to ensure that testing runs smoothly.

Please follow these steps to ensure your Weather App is thoroughly tested for integration.

## 🚀 Future Enhancements

- **Location-Based Forecast:** Detect and display weather information for your current location.

- **Customizable Units:** Choose your preferred units of measurement.

- **Weather Alerts:** Receive notifications for severe weather conditions.

- **Extended Forecast:** Get a 14-day weather forecast.

- **Historical Data:** Explore historical weather data and trends.

- **Additional Charts:** Visualize more weather parameters.

- **User Profiles:** Save favorite locations for quick access.

## ✨ Contributors

- [Mariia Glushenkova](https://github.com/maguitaria) - Creator and main developer.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

