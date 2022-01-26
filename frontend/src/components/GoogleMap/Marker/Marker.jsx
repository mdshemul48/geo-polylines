import React, { useEffect, useState } from 'react';

const Marker = (props) => {
  console.log(props);
  const [marker, setMarker] = useState();
  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  React.useEffect(() => {
    if (marker) {
      marker.setOptions(props);
    }
  }, [marker, props]);
  return null;
};

export default Marker;
