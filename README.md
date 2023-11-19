# Weather App Setup Instructions

This guide will walk you through setting up the Weather App using Node.js, Express, and the OpenWeatherMap API.

## Prerequisites

- Node.js installed on your machine
- OpenWeatherMap API key (Get it from [OpenWeatherMap](https://openweathermap.org/api))
- You may need to create an account for OpenWeatherMap. For this particular application,
I have subscribed to the 'Current Weather Data' API. At the time of this posting, it is free to use.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

## 2. Install Dependencies

Run the following command in your command line to install the dependencies:

```bash
npm install ejs express nodemon
```
nodemon is used here to launch and restart our Node.js application

## 3. Configure OpenWeatherMap API key

Open 'app.js' and replace the empty string with your OpenWeahterMap API key.

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## 4. Run The application

Start the appliation via your terminal: 
```bash
nodemon
```

The application is accessible at 'http://localhost:5000'. Feel free
to customize the port in 'app.js'. Visit this URL in your bowser.

## 5. Explore the Weather App
After navigating to the URL, feel free to explore the routes in the app, such as '/404/ and /weather/.

## Note:
- The application uses EJS templates. You can find them in the 'views' directory.
- Styles are linked from the 'public/styles.css' file. 

## Additional Info
- The application fethces weather data from the OpenWeaterMap API
- The server listens on port 5000 by default. 

Feel free to customize the application based on your requirements. 
If you encounter any issues or have questions, refer to the docuentation
or seek help from the community.



