// app.js

const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

const apiKey = "YOUR_API_KEY_HERE"; // Insert your OpenWeatherMap API key here

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const day = "#448d9c"; /* Day color */
const night = "#191970"; /* Night color */

// Route to render the form
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/404", (req, res) => {
  res.render("404");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

// Route for handling form submission
app.post("/", (req, res) => {
  const q = req.body.location;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    q +
    "&appid=" +
    apiKey;

  https.get(url, (response) => {
    let body = "";
    response.on("data", (data) => {
      body += data;
    });

    response.on("end", () => {
      if (response.statusCode === 404) {
        res.redirect("404");
      } else {
        const weatherData = JSON.parse(body);
        let temp = weatherData.main.temp;
        const currWeather = weatherData.weather[0].main;
        const iconCode = weatherData.weather[0].icon;
        const desc = weatherData.weather[0].description;
        const isDay = iconCode.includes("d");
        let backgroundColor;
        const icon =
          "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        temp = kelvinToFahrenheit(temp);

        if (isDay) {
          backgroundColor = "background-color:" + day + ";";
        } else {
          backgroundColor = "background-color:" + night + ";";
        }

        res.render("weather", {
          location: capitalizeEachWord(q),
          temperature: temp,
          weather: currWeather,
          icon: icon,
          description: desc,
          backgroundColor: backgroundColor,
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function kelvinToFahrenheit(tempInKelvin) {
  return Math.round((tempInKelvin - 273.15) * (9 / 5) + 32);
}

function capitalizeEachWord(sentence) {
  return sentence
    .split(" ") // Split the sentence into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a sentence
}
