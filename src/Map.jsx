import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const location = { lat: -6.256, lng: 106.618 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        mapTypeId: "roadmap",
      });

      new window.google.maps.Marker({
        position: location,
        map,
        title: "Universitas Multimedia Nusantara",
      });

      const streetView = new window.google.maps.StreetViewPanorama(
        mapRef.current,
        {
          position: location,
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }
      );

      map.setStreetView(streetView);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAgphDeswrhslHC1PoAcOpwBJqdCyO242M`;
      script.async = true;
      script.defer = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return <div ref={mapRef} className="h-96 w-full" />;
};

export default Map;
