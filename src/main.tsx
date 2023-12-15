import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { WeatherProvider } from "./contexts/TemperatureUnit"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WeatherProvider>
 <App />
      </WeatherProvider>
     
    </Provider>
  </React.StrictMode>,
)
