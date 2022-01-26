import { useCallback, useEffect, useState } from 'react';

const Polyline = ({ map, coordinates, onClick }) => {
  const [polyline, setPolyline] = useState(null);

  const removeVertexHandler = useCallback(
    (event) => {
      if (event.vertex === undefined) {
        return;
      }
      polyline.getPath().removeAt(event.vertex);
    },
    [polyline]
  );

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

      window.google.maps.event.addListener(
        polyline,
        'contextmenu',
        removeVertexHandler
      );
      return () => {
        polyline.setMap(null);
      };
    }
  }, [map, polyline, onClick, removeVertexHandler]);

  return null;
};

export default Polyline;
