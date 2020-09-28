# Weather App

This applications shows weather information of cities around the world.

## Installing

### Clonning

- Clone this repository to your local machine using `$ git clone https://github.com/figueiredocamila/weather-app.git` or download the project ZIP.

### Setup

- Navigate to the project folder and install this package using `$ yarn install` or `$ npm i`

## Running the project locally

- After all packages installed, run the command `npm run start` or `yarn start`
- Then, open the browser and go to `http://localhost:3000`

## Building the project to production

- Run the command `npm run build` or `yarn build`
- Once the build proccess finish, all the static files will be ready to deploy to production on `build` folder.

## Technologies

- React.js
- Styled Components
- Axios
- PropTypes
- Open Weather Map API
- Google Maps API (React Google Maps)
- Browser Geolocation API

The application was created by using **React.js (create-react-app)** as JavaScript library for building the front-end.
It also uses **Styled Components** as CSS-in-JS framework to style the components and pages.
**PropTypes** is used to document the intended types of properties passed to components.
To render the map the app uses **Google Maps API (react-google-maps)** and for making the HTTP requests on **Open Weather API** was used **Axios**.

Also was used **Geolocation API** to access the user's geolocation if allowed.

## App running in production

Go to https://wtrapp.surge.sh to use the app running on a production environment.
