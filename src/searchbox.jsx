import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


export default function SearchBox({ updateInfo }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response)
      let responseJson = await response.json();

      let result = {
        city: city,
        temp: responseJson.main.temp,
        tempMin: responseJson.main.temp_min,
        tempMax: responseJson.main.temp_max,
        humidity: responseJson.main.humidity,
        feelsList: responseJson.main.feels_like,
        weather: responseJson.weather[0].description,
      };

      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  //   document.addEventListener("click", (event) => {
  //     console.log(event.target)
  //   })

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      // console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      // console.log(newInfo)
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <h2>Seacrh Box</h2>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          value={city}
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exist</p>}
      </form>
    </div>
  );
}
