import React, { useRef, useState, useEffect } from 'react';

const Map = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 23.924972, lng: 90.263242 },
        zoom: 15,
      });
      setMap(map);
    }
  }, [map, mapRef]);
  return (
    <>
      <div ref={mapRef} id='map' />
    </>
  );
};

export default Map;
