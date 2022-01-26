import React from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';

// this is just wrapping map component and importing util for google map

// components
import Map from './Map/Map';

import Marker from './Marker/Marker';

const MapMainComponent = () => {
  const mark = new window.google.maps.LatLng({
    lat: 23.924972,
    lng: 90.263242,
  });
  return (
    <Map center={{ lat: 23.924972, lng: 90.263242 }} zoom={15}>
      <Marker position={mark} />
    </Map>
  );
};

export default MapMainComponent;
