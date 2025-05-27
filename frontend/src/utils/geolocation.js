

export const detectLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lng: longitude }); // Resolve with lat, lng
        },
        (error) => {
          reject('Unable to retrieve location. Ensure location permissions are enabled.');
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};
