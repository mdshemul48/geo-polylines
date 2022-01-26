import React, { useRef, useState, useEffect } from 'react';

const Map = ({ onClick, children, ...options }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  // this will initialize the map
  useEffect(() => {
    if (mapRef.current && !map) {
      const map = new window.google.maps.Map(mapRef.current, {
        ...options,
      });
      setMap(map);
      map.addListener('click', onClick);
    }
  }, [map, mapRef, options, onClick]);
  return (
    <>
      <div ref={mapRef} id='map' />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
