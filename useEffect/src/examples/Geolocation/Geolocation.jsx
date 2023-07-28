import { useState, useEffect } from "react";

const GeoLocation = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const handleSuccess = (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      };

      const handleError = (error) => {
        setError(error.message);
      };

      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    },
    [
      //  --- NO DEPENDENCY ---
    ],
  );

  return (
    <div>
      <p>Latitude: {position.latitude}</p>
      <p>Longitude: {position.longitude}</p>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default GeoLocation;
