import React, { useRef, useState, useEffect } from 'react';

const Map = ({ onClick, Children, ...options }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const map = new window.google.maps.Map(mapRef.current, {
        ...options,
      });
      setMap(map);
    }
  }, [map, mapRef, options]);

  return (
    <>
      <div ref={mapRef} id='map' />
      {React.Children.map()}
    </>
  );
};

export default Map;
