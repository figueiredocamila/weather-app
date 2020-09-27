import React from 'react';
import { MapWrapper } from './style';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative !important'
};

const WeatherMap = props => {
  const mapCLicked = (mapProps, map, e) => {
    props.setCurrentLocation({lat: e.latLng.lat(), lng: e.latLng.lng()})
  };

  return (
    <MapWrapper>    
      <Map
        google={props.google}
        zoom={4}
        center={props.center}
        style={mapStyles}
        initialCenter={props.center}
        onClick={mapCLicked}
        streetViewControl={false}
        fullscreenControl={false}
      >
        <Marker position={props.center} />
      </Map>
    </MapWrapper>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBcG9GaC91dreNqmQ9mDVkcjbrKF0y9D1c'
})(WeatherMap);
