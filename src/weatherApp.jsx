import React from "react";
import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchbox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "lahore",
    feelsList: 41.55,
    humidity: 22,
    temp: 40.99,
    tempMax: 42.06,
    tempMin: 40.99,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  };

  return (
    <div>
      <h1>Weather app by UmerProject</h1>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
