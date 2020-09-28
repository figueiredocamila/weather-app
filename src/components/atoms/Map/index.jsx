import React from 'react';
import { MapWrapper } from './style';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative !important'
};

const WeatherMap = ({google, center, setCurrentLocation}) => {
  const mapCLicked = (mapProps, map, e) => {
    setCurrentLocation({lat: e.latLng.lat(), lng: e.latLng.lng()})
  };

  return (
    <MapWrapper>    
      <Map
        google={google}
        zoom={4}
        center={center}
        style={mapStyles}
        initialCenter={center}
        onClick={mapCLicked}
        streetViewControl={false}
        fullscreenControl={false}
      >
        <Marker position={center} />
      </Map>
    </MapWrapper>
  )
}

WeatherMap.propTypes = {
  center: PropTypes.object,
  setCurrentLocation: PropTypes.func
}

WeatherMap.defaultProps = {
  center: {},
  setCurrentLocation: () => {}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBcG9GaC91dreNqmQ9mDVkcjbrKF0y9D1c'
})(WeatherMap);
