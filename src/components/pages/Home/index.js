import React, { useEffect, useState } from 'react';
import Map from '../../atoms/Map';
import List from '../../organisms/List';
import Button from '../../atoms/Button';
import getWeatherInfo from '../../../services/WeatherApi';

function App() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 53.31, lng: -6.30 });
  const [cities, setCities] = useState([]);

  const getCities = async location => {
    const { data } = await getWeatherInfo(location);
    setCities(data.list)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    });
  }, [])

  return (
    <div>
      <Map setCurrentLocation={setCurrentLocation} center={currentLocation} />
      <Button onclick={() => getCities(currentLocation)} type="search" />
      <List cities={cities}></List>
    </div>
  );
}

export default App;