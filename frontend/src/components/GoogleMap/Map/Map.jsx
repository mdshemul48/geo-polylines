import React, { useRef, useState, useEffect } from 'react';

const Map = ({ onClick, Children, ...options }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  // this will initialize the map
  useEffect(() => {
    if (mapRef.current && !map) {
      const map = new window.google.maps.Map(mapRef.current, {
        ...options,
      });
      setMap(map);
    }
  }, [map, mapRef, options]);

  // this is adding event listener to the map
  useEffect(() => {
    if (map && onClick) {
      map.addListener('click', onClick);
    }
  }, [onClick, map]);

  return (
    <>
      <div ref={mapRef} id='map' />
      {React.Children.map(Children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
