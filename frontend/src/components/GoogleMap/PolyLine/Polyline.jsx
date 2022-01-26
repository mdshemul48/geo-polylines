import React, { useEffect, useState } from 'react';

const Polyline = ({ map, coordinates }) => {
  const [polyline, setPolyline] = useState();

  useEffect(() => {
    setPolyline(
      new window.google.maps.Polyline({
        path: coordinates,
        editable: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      })
    );
  }, [coordinates]);

  useEffect(() => {
    if (polyline) {
      polyline.setMap(map);
      return () => {
        polyline.setMap(null);
      };
    }
  }, [map, polyline]);

  return null;
};

export default Polyline;
