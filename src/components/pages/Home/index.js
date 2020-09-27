import React, { useEffect, useState } from 'react';
import Map from '../../atoms/Map';
import List from '../../organisms/List';
import Button from '../../atoms/Button';
import getWeatherInfo from '../../../services/WeatherApi';
import { WrapperStyle } from './style';

function App() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 53.31, lng: -6.30 });
  const [cities, setCities] = useState(undefined);

  const getCities = async location => {
    try {
      const { data } = await getWeatherInfo(location);
      setCities(data.list)
    } catch (e) {
      setCities([])
    }
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
    <WrapperStyle>
      <Map setCurrentLocation={setCurrentLocation} center={currentLocation} />
      <Button search={() => getCities(currentLocation)} type="search" />
      {cities !== undefined && <List cities={cities}></List>}
    </WrapperStyle>
  );
}

export default App;