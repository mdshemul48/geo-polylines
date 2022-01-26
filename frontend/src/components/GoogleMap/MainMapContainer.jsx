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

  const onClickHandler = (event) => {
    console.log(event);
  };
  return (
    <Map
      center={{ lat: 23.915780753330143, lng: 90.25813858720137 }}
      zoom={15}
      onClick={markerHandler}
    >
      <Polyline coordinates={polyline} onClick={onClickHandler} />
    </Map>
  );
};

export default MapMainComponent;
