const fetchLocationAPI = async (lat: number, lng: number) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&locationdetails=1`
    );
    const data = await res.json();

    return data;
  } catch (error) {}
};

export default fetchLocationAPI;
