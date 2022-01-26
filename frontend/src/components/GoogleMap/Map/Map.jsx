import React, { useRef, useState, useEffect } from 'react';

const Map = ({ onClick, children, style, ...options }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      setMap(new window.google.maps.Map(mapRef.current, {}));
    }
  }, [mapRef, map]);

  useEffect(() => {
    if (map) {
      if (onClick) {
        map.addListener(onClick);
      }
    }
  }, [map, onClick]);

  return (
    <>
      <div ref={mapRef} {...options} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
