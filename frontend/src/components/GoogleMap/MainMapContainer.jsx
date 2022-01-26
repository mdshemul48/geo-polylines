import React from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';

// this is just wrapping map component and importing util for google map

// components
import Map from './Map/Map';

const MapMainComponent = () => {
  const render = (status) => {
    console.log(status);
    return null;
  };
  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API} render={render}>
      <Map />
    </Wrapper>
  );
};

export default MapMainComponent;
