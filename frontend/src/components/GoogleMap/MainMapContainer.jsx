import React, { useState } from 'react';

// this is just wrapping map component and importing util for google map

// components
import Map from './Map/Map';

import Marker from './Marker/Marker';

const MapMainComponent = () => {
  const [markers, setMarker] = useState([]);
  const markerHandler = (event) => {
    setMarker((prevState) => [...prevState, event.latLng]);
  };
  return (
    <Map
      center={{ lat: 23.924972, lng: 90.263242 }}
      zoom={15}
      onClick={markerHandler}
    >
      {markers.map((item, index) => {
        return <Marker position={item} key={index} />;
      })}
    </Map>
  );
};

export default MapMainComponent;
