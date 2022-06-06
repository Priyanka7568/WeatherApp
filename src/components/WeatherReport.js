import * as React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { format } from "date-fns";

const WeatherReport = (props) => {
  const info = props.details;
  return (
    <Container component="div">
      <Grid container mt={1}>
        <Grid item md={6} xs={12}>
          <Typography
            variant="h3"
            component="h1"
            mt={2}
            textTransform={"uppercase"}
            fontWeight={700}
            color={"white"}
          >
            {info && info.location.name}
          </Typography>
          <Typography component="p">
            {info ? `${format(new Date(), "EEEE, MMMM do yyyy")}` : ""}
          </Typography>
          <Typography component="h3" mt={2} variant="h2" fontWeight={900}>
            {info ? `${info && info.current.temp_c}°c` : ""}
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} align={"center"}>
          <img
            src={
              info
                ? `https:${
                    info && info.forecast.forecastday[0].day.condition.icon
                  }`
                : ""
            }
          />

          <Typography component="p" variant="h6" fontWeight={700}>
            {info && info.forecast.forecastday[0].day.condition.text}
          </Typography>
          <Typography component="p" variant="h6" fontWeight={700}>
            {info
              ? `${info && info.forecast.forecastday[0].day.mintemp_c}°c/${
                  info && info.forecast.forecastday[0].day.maxtemp_c
                }°c`
              : ""}
          </Typography>
        </Grid>
      </Grid>
      {info ? (
        <Grid container spacing={3} mt={1} align={"center"}>
          <Grid item md={4} xs={12}>
            <Card className="custom_card">
              <CardContent>
                <Typography
                  component="p"
                  variant="h4"
                  fontWeight={700}
                  color={"#b2c3ff"}
                >
                  {info && info.forecast.forecastday[0].day.avghumidity}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  fontWeight={700}
                  color={"#c5c5c5"}
                >
                  Average
                  <br />
                  Humidity
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className="custom_card">
              <CardContent>
                <Typography
                  component="p"
                  variant="h4"
                  fontWeight={700}
                  color={"#b2c3ff"}
                >
                  {info && info.forecast.forecastday[0].day.avgtemp_c}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  fontWeight={700}
                  color={"#c5c5c5"}
                >
                  Temperature
                  <br />
                  in Celsius
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className="custom_card">
              <CardContent>
                <Typography
                  component="p"
                  variant="h4"
                  fontWeight={700}
                  color={"#b2c3ff"}
                >
                  {info && info.forecast.forecastday[0].day.avgtemp_f}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  fontWeight={700}
                  color={"#c5c5c5"}
                >
                  Temperature
                  <br />
                  in Fahrenheit
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item md={3} xs={5}>
            <img
              src={require("../assets/animatedMeteorologist.gif")}
              border="0"
              alt="animated-weather-forecaster-and-meteorologist-image-0007"
            />
          </Grid>
          <Grid item md={9} xs={7} align="center">
            <Typography
              variant="h2"
              component="h2"
              color={"#fff"}
              fontWeight={"700"}
              className="custom_size"
            >
              Search Your City
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
export default WeatherReport;
