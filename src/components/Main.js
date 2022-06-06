import React, { useState } from "react";
import axios from "axios";
import WeatherReport from "./WeatherReport";
import { Box, Typography, Container, TextField } from "@mui/material";

function Main() {
  const [report, setReport] = useState(false);
  const [city, setCity] = useState("");
  const url = `https://api.weatherapi.com/v1/forecast.json?key=c207657ab9074841a8163643220406&q=${city}&days=1&aqi=yes&alerts=yes
  `;
  const searchLocation = async (e) => {
    if (e.key === "Enter") {
      const res = await axios.get(url);
      setReport(res.data);
      setCity("");
    }
  };
  return (
    <Container maxWidth="sm" className="container">
      <Typography align="center" component="div">
        <Typography mb={3} variant="h4" component="h1" fontWeight={"700"}>
          Hey! Welcome to (KYW)
          <Typography variant="span" component="span" ml={1} color={"#ffffff"}>
            Know Your Weather
          </Typography>
        </Typography>
        <img
          src={require("../assets/animatedSmiley.gif")}
          border="0"
          alt="animated-autumn-and-fall-smiley-image-0028"
        />
        <TextField
          className="searchBar"
          fullWidth={true}
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyPress={searchLocation}
          label="Please Enter Location"
        />
      </Typography>
      <Box>
        <WeatherReport details={report} />
      </Box>
    </Container>
  );
}

export default Main;
