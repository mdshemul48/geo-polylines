import React, { useState } from 'react';

// this is just wrapping map component and importing util for google map

// components
import Map from './Map/Map';

// import Marker from './Marker/Marker';
import Polyline from './PolyLine/Polyline';

const MapMainComponent = () => {
  const [polyline, setPolyline] = useState([]);
  const markerHandler = (event) => {
    setPolyline((prevState) => [...prevState, event.latLng]);
  };
  return (
    <Map
      center={{ lat: 21.291982, lng: -157.821856 }}
      zoom={3}
      onClick={markerHandler}
    >
      <Polyline coordinates={polyline} />
    </Map>
  );
};

export default MapMainComponent;
